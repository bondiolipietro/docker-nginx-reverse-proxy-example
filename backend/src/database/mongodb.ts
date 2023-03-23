import mongoose from "mongoose";

import { ApiConfig } from "@/config";

import { IDatabase } from "./interfaces";

class MongoDB implements IDatabase {
    public connect = async () => {
        const mongoUserPass = ApiConfig.MONGO.USERNAME
            ? `${ApiConfig.MONGO.USERNAME}:${ApiConfig.MONGO.PASSWORD}@`
            : "";

        const mongoConnString = `${ApiConfig.MONGO.CONNECTION_SCHEME}://${mongoUserPass}${ApiConfig.MONGO.HOST}:${ApiConfig.MONGO.PORT}`;

        console.info("Connecting to database...");

        await mongoose.connect(mongoConnString, {
            dbName: ApiConfig.MONGO.DB_NAME,
        });

        console.info("Connected to database");
    };
}

export { MongoDB };
