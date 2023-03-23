import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { ApplicationError } from "@/model/errors/base/ApplicationError";

const normalizeError = (err: Error) => {
    if (err instanceof ApplicationError && err.status) {
        return err;
    }

    return {
        message: err.message,
        status: StatusCodes.INTERNAL_SERVER_ERROR,
    };
};

const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    try {
        if (res.headersSent) {
            return next(err);
        }
        const error_res = normalizeError(err);

        res.status(Number(error_res.status)).json({
            message: error_res.message,
        });
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: e.message,
        });
    }
};

export { errorHandlerMiddleware };
