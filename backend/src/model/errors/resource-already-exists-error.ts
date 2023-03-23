import { StatusCodes } from "http-status-codes";

import { ApplicationError } from "./base/ApplicationError";

class ResourceAlreadyExistsError extends ApplicationError {
    constructor(resource: string) {
        super(StatusCodes.CONFLICT, `Resource ${resource} already exists`);
    }
}

export { ResourceAlreadyExistsError };
