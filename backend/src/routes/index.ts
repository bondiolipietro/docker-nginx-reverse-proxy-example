import { Router } from "express";

import { getRoutes } from "./routes";

const router = Router();
const routes = getRoutes();

routes.forEach((route) => {
    router[route.method.toLowerCase()](route.path, ...(route.middlewares || []), route.controller);
});

export { router };
