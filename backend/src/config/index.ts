import * as dotenv from "dotenv";

const envPath = {
    development: ".env.development",
    production: ".env",
    test: ".env.test",
};

dotenv.config({ path: envPath[process.env.NODE_ENV] });

class ApiConfig {
    public static readonly API_BASE_PATH = process.env.API_BASE_PATH || "/api/v1";

    public static readonly API_KEY = process.env.API_KEY || "";

    public static readonly MONGO = {
        CONNECTION_SCHEME: process.env.MONGO_CONNECTION_SCHEME || "mongodb",
        HOST: process.env.MONGO_HOST || "localhost",
        PORT: process.env.MONGO_PORT || "27017",
        DB_NAME: process.env.MONGO_DB_NAME || "",
        USERNAME: process.env.MONGO_USERNAME || "",
        PASSWORD: process.env.MONGO_PASSWORD || "",
    };
}

export { ApiConfig };
