import express, { json } from "express";
import "express-async-errors";

import { ApiConfig } from "@/config";
import { router } from "@/routes/index";
import {
    apiKeyAuthMiddleware,
    errorHandlerMiddleware,
    loggerMiddleware,
    rateLimiter,
    validateReqMiddleware,
} from "@/middleware";
import { mongoDB } from "@/database";
import { IDatabase } from "@/database/interfaces";
import { ILogger } from "@/util/logger/interfaces";
import { wLogger } from "@/util/logger";

const DEFAULT_PORT = 3333;
const PORT = process.env.PORT || DEFAULT_PORT;

class App {
    private app: express.Application;
    private database: IDatabase;
    private logger: ILogger;

    constructor(database: IDatabase, logger: ILogger) {
        this.app = express();
        this.database = database;
        this.logger = logger;
    }

    async build() {
        await this.setupDatabase();
        this.setupPreRoutesMiddlewares();
        this.setupRoutes();
        this.setupPosRoutesMiddlewares();
    }

    start() {
        this.app.listen(PORT, () => {
            this.logger.info(`Server listening on port: ${PORT}`);
        });
    }

    setupPreRoutesMiddlewares() {
        this.app.use(json());
        this.app.use(loggerMiddleware);
        this.app.use(rateLimiter);
        this.app.use(apiKeyAuthMiddleware);
        this.app.use(validateReqMiddleware);
    }

    setupPosRoutesMiddlewares() {
        this.app.use(errorHandlerMiddleware);
    }

    setupRoutes() {
        this.app.use(ApiConfig.API_BASE_PATH, router);
    }

    async setupDatabase() {
        await this.database.connect();
    }
}

const app = new App(mongoDB, wLogger);

export { app };
