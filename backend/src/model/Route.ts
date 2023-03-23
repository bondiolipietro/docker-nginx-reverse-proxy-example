import { RequestHandler } from "express";
import { ZodType } from "zod";

type RouteConstructor = {
    path: string;
    method: string;
    controller: RequestHandler;
    validator?: ZodType;
    middlewares?: Array<RequestHandler>;
};

class Route {
    public path: string;

    public method: string;

    public controller: RequestHandler;

    public validator?: ZodType;

    public middlewares?: Array<RequestHandler>;

    constructor({ path, method, controller, validator, middlewares }: RouteConstructor) {
        this.path = path;
        this.method = method.toLowerCase();
        this.controller = controller;
        this.validator = validator;
        this.middlewares = middlewares;
    }
}

export { Route };
