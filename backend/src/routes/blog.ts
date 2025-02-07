import { Hono } from "hono";
import { verify } from "hono/jwt";

const blogRouter = new Hono<{
  Bindings: {
    JWT_SECRET: string;
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("*", async (c, next) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    c.status(401);
    return c.json({ error: "Not Authorized, Please Sign in" });
  }
  const token = authHeader.split(" ")[1];

  try {
  const user = await verify(token, c.env.JWT_SECRET);
  c.set("userId", user.userId);
  await next();
  } catch (e) {
    c.status(401);
    return c.json({error: "Invalid Token"});
  }
});

blogRouter.post("/", (c) => {
  return c.text("Create Blog Page");
});

blogRouter.put("/:id", (c) => {
  return c.text("Update Blog Page");
});

blogRouter.delete("/:id", (c) => {
  return c.text("Delete Blog Page");
});

blogRouter.get("/:id", (c) => {
  return c.text(`Get Blog Page ${c.req.param("id")}`);
});

blogRouter.get("/bulk", (c) => {
  return c.text("get all the blogs");
});

export default blogRouter;
