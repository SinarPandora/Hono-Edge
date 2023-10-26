import {Hono} from "hono";
import {api as articleApi} from "./article";

const app = new Hono().basePath('/api');

app.get('/', (c) => c.json({ message: 'Hello Hono!' }));
app.route('/article', articleApi);

export default app;
