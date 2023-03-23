/* eslint-disable import/no-unresolved */
import express from "express";
import "express-async-errors";

import config from "@/config/index";
import { router } from "@/routes/index";
import {
    apiKeyAuthMiddleware,
    errorHandlerMiddleware,
    loggerMiddleware,
    validateReqMiddleware,
} from "@/middleware";
import { connectMongoDB } from "@/database/connect";

const DEFAULT_PORT = 3333;
const PORT = process.env.PORT || DEFAULT_PORT;

class App {
    private app: express.Application;

    constructor() {
        this.app = express();
    }

    async build() {
        console.log(process.env.NODE_ENV);
        await this.setupDatabase();
        this.setupPreRoutesMiddlewares();
        this.setupRoutes();
        this.setupPosRoutesMiddlewares();
    }

    start() {
        this.app.listen(PORT, () => {
            console.info(`server listening on port: ${PORT}`);
        });
    }

    setupPreRoutesMiddlewares() {
        this.app.use(express.json());
        this.app.use(loggerMiddleware);
        this.app.use(apiKeyAuthMiddleware);
        this.app.use(validateReqMiddleware);
    }

    setupPosRoutesMiddlewares() {
        this.app.use(errorHandlerMiddleware);
    }

    setupRoutes() {
        this.app.use(config.api.base_path, router);
    }

    async setupDatabase() {
        await connectMongoDB();
    }
}

const app = new App();

export { App, app };
