import { Hono } from "hono";

const userRouter = new Hono();

userRouter.post("/signup", (c) => {
  return c.text("Signup page");
});

userRouter.post("/signin", (c) => {
  return c.text("sigin page");
});


export default userRouter;