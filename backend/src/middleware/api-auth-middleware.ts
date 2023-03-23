import { NextFunction, Request, Response } from "express";

import { ApiConfig } from "@/config";
import { UnauthorizedError } from "@/model/errors";

const apiKeyAuthMiddleware = async (req: Request, _res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (authorization === `Bearer ${ApiConfig.API_KEY}`) {
        return next();
    }

    throw new UnauthorizedError();
};

export { apiKeyAuthMiddleware };
