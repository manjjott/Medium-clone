import { Hono } from "hono";
import { getPrisma } from "../prismaFucntion";
import { sign } from "hono/jwt";

const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const { email, name, password } = body;
  const prisma = getPrisma(c.env.DATABASE_URL);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
    const payload = {
      userId: user.id,
    };
    const secret = c.env.JWT_SECRET;
    const token = await sign(payload, secret);
    return c.json({ user: user, token: token });
  } catch (e) {
    return c.json({ error: e });
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const { email, password } = body;
  const prisma = getPrisma(c.env.DATABASE_URL);
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "Invalid email or password" });
    }
    const jwt = await sign({ userId: user.id }, c.env.JWT_SECRET);
    return c.json({ token: jwt });
  } catch (e) {
    return c.json({ error: e });
  }
});

export default userRouter;
