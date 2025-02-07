import { Hono } from "hono";
import userRouter from "./routes/user";
import blogrouter from "./routes/blog";

const app = new Hono<{}>()

app.route("/api/v1/user", userRouter);
app.route("api/v1/blog", blogrouter);

export default app;
