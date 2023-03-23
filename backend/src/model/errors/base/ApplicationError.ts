abstract class ApplicationError extends Error {
    public status: number;

    constructor(statusCode: number, message?: string) {
        super();

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;

        this.status = statusCode;

        this.message = message || "Something went wrong. Please try again.";
    }
}

export { ApplicationError };
