import { NextFunction, Request, Response } from "express";

import config from "@/config/index";
import { UnauthorizedError } from "@/model/errors";

const apiKeyAuthMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (authorization === config.api.api_key) {
        return next();
    }

    throw new UnauthorizedError();
};

export { apiKeyAuthMiddleware };
