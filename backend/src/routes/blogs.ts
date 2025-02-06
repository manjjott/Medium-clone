import { Hono } from "hono";

const blogRouter = new Hono();


blogRouter.post('/', (c) => {

    return c.text("Create a blog");
});

blogRouter.put('/', (c) => {
    return c.text("Get all blogs");
});

blogRouter.get("/:id", (c) => {
     const id = c.req.param('id');
    return c.text(`Get blog with id ${id}`);

});

blogRouter.get("/bulk", (c) => {
    return c.text("Get all blogs");
});

export default blogRouter;
