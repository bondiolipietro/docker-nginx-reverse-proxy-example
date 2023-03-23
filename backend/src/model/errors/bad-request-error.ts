import { StatusCodes } from "http-status-codes";

import { ApplicationError } from "./base/ApplicationError";

class BadRequestError extends ApplicationError {
    constructor(message: string) {
        super(StatusCodes.BAD_REQUEST, message);
    }
}

export { BadRequestError };
