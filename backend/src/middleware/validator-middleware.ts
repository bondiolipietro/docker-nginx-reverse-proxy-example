import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

import { ApiConfig } from "@/config";
import { getRoutes } from "@/routes/routes";
import { BadRequestError } from "@/model/errors";

const routes = getRoutes();

const getRoute = (path: string, method: string) =>
    routes.find(
        (r) => `${ApiConfig.API_BASE_PATH}${r.path}` === path && r.method === method.toLowerCase()
    );

const getValidator = (path: string, method: string) => {
    const route = getRoute(path, method);
    if (route) {
        return route.validator ? route.validator : null;
    }
    return null;
};

const validateReqMiddleware = async (req: Request, _: Response, next: NextFunction) => {
    const validator = getValidator(req.path, req.method);
    if (validator !== null) {
        try {
            await validator.parseAsync(req);
        } catch (e) {
            let errorMessage = e.message;

            if (e instanceof ZodError) {
                errorMessage = e.issues
                    .map((error) => `${error.message}: ${error.path.join(".")}`)
                    .join(", ");
            }

            throw new BadRequestError(errorMessage);
        }
    }
    return next();
};

export { validateReqMiddleware };
