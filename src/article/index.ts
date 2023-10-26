import {Hono} from "hono";
import prisma from "../database";

export const api = new Hono();

api.get('/:id', async c => {
    const {id}: { id: string } = c.req.param();
    const article = await prisma.t_articles.findFirst({
        where: {article_id: +id}
    });
    return c.json(article);
});
