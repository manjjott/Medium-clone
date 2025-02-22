import { Hono } from "hono";
import { verify } from "hono/jwt";
import { getPrisma } from "../prismaFucntion";
import { updateBlogInput, createBlogInput } from "@manjjott/common";

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    c.status(401);
    return c.json({ error: "Not Authorized, Please Sign in" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const user = (await verify(token, c.env.JWT_SECRET)) as { userId: string };
    c.set("userId", user.userId);
    await next();
  } catch (e) {
    c.status(401);
    return c.json({ error: "Invalid Token" });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    return c.json({ error: "Invalid input" });
  }
  const userId = c.get("userId");
  if (!userId) {
    return c.json({ error: "User ID missing from request." }, 401);
  }
  const { title, content } = body;
  if (!title || !content) {
    return c.json({ error: "Title and content are required!" }, 400);
  }
  const prisma = getPrisma(c.env.DATABASE_URL);

  try {
    const blog = await prisma.blog.create({
      data: {
        title: title,
        content: content,
        authorId: userId,
      },
    });
    return c.json({ blog: blog });
  } catch (e) {
    return c.json({ error: e });
  }
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    return c.json({ error: "Invalid input" });
  }
  const { title, content, id } = await c.req.json();
  if (!title || !content || !id) {
    return c.json({ error: "Title and content are required!" }, 400);
  }

  const prisma = getPrisma(c.env.DATABASE_URL);

  try {
    const blog = await prisma.blog.update({
      where: {
        id: body.id,
        authorId: c.get("userId"),
      },
      data: {
        title,
        content,
      },
    });
    return c.json({ blog: blog });
  } catch (e) {
    return c.json({ error: e });
  }
});

blogRouter.delete("/:id", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  try {
    const blog = await prisma.blog.delete({
      where: {
        id: c.req.param("id"),
        authorId: c.get("userId"),
      },
    });
    return c.json({ message: "Blog page deleted" });
  } catch (e) {
    return c.json({ error: "Error deleting blog page" + e });
  }
});

blogRouter.get("/:id", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: c.req.param("id"),
      },
    });
    return c.json({ blog: blog });
  } catch (e) {
    return c.json({ error: e });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  try {
    const blogs = await prisma.blog.findMany();
    return c.json({ blogs: blogs });
  } catch (e) {}
  return c.json({ message: "get all the blogs" });
});

export default blogRouter;
