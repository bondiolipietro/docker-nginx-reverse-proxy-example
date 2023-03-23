import express, { json } from "express";
import "express-async-errors";

import { ApiConfig } from "@/config";
import { router } from "@/routes/index";
import {
    apiKeyAuthMiddleware,
    errorHandlerMiddleware,
    loggerMiddleware,
    validateReqMiddleware,
} from "@/middleware";
import { MongoDB } from "@/database";
import { IDatabase } from "@/database/interfaces";

const DEFAULT_PORT = 3333;
const PORT = process.env.PORT || DEFAULT_PORT;

class App {
    private app: express.Application;
    private database: IDatabase;

    constructor(database: IDatabase) {
        this.app = express();
        this.database = database;
    }

    async build() {
        await this.setupDatabase();
        this.setupPreRoutesMiddlewares();
        this.setupRoutes();
        this.setupPosRoutesMiddlewares();
    }

    start() {
        this.app.listen(PORT, () => {
            console.info(`Server listening on port: ${PORT}`);
        });
    }

    setupPreRoutesMiddlewares() {
        this.app.use(json());
        this.app.use(loggerMiddleware);
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

const app = new App(new MongoDB());

export { app };
