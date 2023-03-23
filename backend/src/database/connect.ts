import mongoose from "mongoose";

import config from "@/config/index";

const connectMongoDB = async () => {
    const mongoUserPass = config.mongo.user ? `${config.mongo.user}:${config.mongo.password}@` : "";

    const mongoConnString = `${config.mongo.connection_str_scheme}://${mongoUserPass}${config.mongo.host}:${config.mongo.port}`;
    console.info("Connecting to database...");

    await mongoose.connect(mongoConnString, {
        dbName: config.mongo.db,
    });

    console.info("Connected to database");
};

export { connectMongoDB };
