/* eslint-disable import/no-unresolved */
import express from "express";
import "express-async-errors";

import { router } from "@/routes/index";
import config from "@/config";

const DEFAULT_PORT = 3333;
const PORT = process.env.PORT || DEFAULT_PORT;

class App {
    private app: express.Application;

    constructor() {
        this.app = express();
    }

    async build() {
        this.setupDatabase();
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
    }

    setupPosRoutesMiddlewares() {
        /* TODO Since we don't have any middlewares yet, this method is empty */
    }

    setupRoutes() {
        this.app.use(config.api.base_path, router);
    }

    setupDatabase() {
        /* TODO Since database is not implemented yet, this method is empty */
    }
}

const app = new App();

export { App, app };
