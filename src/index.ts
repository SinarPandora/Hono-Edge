import {Hono} from "hono";
import {cors} from "hono/cors";
import {api as articleApi} from "./article";

const app = new Hono().basePath('/api');

app.use(
    '*',
    cors({
        origin: ['http://localhost:21300', 'https://splat.yohane.cc', 'https://spla.tools'],
        allowMethods: ['PUT', 'POST', 'GET', 'OPTIONS'],
        maxAge: 600,
        credentials: true,
    })
)

app.get('/', (c) => c.json({message: 'Hello Hono!'}));
app.route('/article', articleApi);

export default app;
