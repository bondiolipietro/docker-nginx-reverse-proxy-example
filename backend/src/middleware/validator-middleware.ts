import { NextFunction, Request, Response } from "express";

import config from "@/config/index";
import { getRoutes } from "@/routes/routes";
import { BadRequestError } from "@/model/errors";

const routes = getRoutes();

const getRoute = (path: string, method: string) =>
    routes.find(
        (r) => `${config.api.base_path}${r.path}` === path && r.method === method.toLowerCase()
    );

const getValidator = (path: string, method: string) => {
    const route = getRoute(path, method);
    if (route) {
        return route.validator ? route.validator : null;
    }
    return null;
};

const validateReqMiddleware = (req: Request, _: Response, next: NextFunction) => {
    const validator = getValidator(req.path, req.method);
    if (validator !== null) {
        Object.entries(validator).forEach(([location, schema]) => {
            try {
                schema.validateSync(req[location]);
            } catch (error) {
                return next(new BadRequestError(error.message));
            }
        });
    }
    return next();
};

export { validateReqMiddleware };
