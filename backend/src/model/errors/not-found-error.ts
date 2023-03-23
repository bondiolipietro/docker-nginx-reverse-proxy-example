import { StatusCodes } from "http-status-codes";

import { ApplicationError } from "./base/ApplicationError";

class NotFoundError extends ApplicationError {
    constructor(resource: string) {
        super(StatusCodes.NOT_FOUND, `${resource} not found`);
    }
}

export { NotFoundError };
