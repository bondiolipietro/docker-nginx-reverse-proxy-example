import mongoose from "mongoose";

import { ApiConfig } from "@/config";
import { ILogger } from "@/util/logger/interfaces";
import { wLogger } from "@/util/logger";

import { IDatabase } from "./interfaces";

class MongoDB implements IDatabase {
    private logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    public connect = async () => {
        const mongoUserPass = ApiConfig.MONGO.USERNAME
            ? `${ApiConfig.MONGO.USERNAME}:${ApiConfig.MONGO.PASSWORD}@`
            : "";

        const mongoConnString = `${ApiConfig.MONGO.CONNECTION_SCHEME}://${mongoUserPass}${ApiConfig.MONGO.HOST}:${ApiConfig.MONGO.PORT}`;

        this.logger.info("Connecting to database...");

        await mongoose.connect(mongoConnString, {
            dbName: ApiConfig.MONGO.DB_NAME,
        });

        this.logger.info("Connected to database");
    };
}

const mongoDB = new MongoDB(wLogger);

export { mongoDB };
