import process from "process";

import { createLogger, format, Logger, transports } from "winston";
import winstonGelf from "winston-gelf";

import { ApiConfig } from "@/config";

import { ILogger } from "./interfaces";

class WinstonLogger implements ILogger {
    public _logger: Logger;

    constructor() {
        this._logger = createLogger({
            format: format.combine(format.colorize(), format.json()),
            transports: [
                new transports.Console(),
                new winstonGelf({
                    gelfPro: {
                        fields: {
                            env: process.env.NODE_ENV || "development",
                        },
                        adapterName: "udp",
                        adapterOptions: {
                            host: ApiConfig.GRAYLOG.HOST,
                            port: ApiConfig.GRAYLOG.PORT,
                        },
                    },
                }),
            ],
        });
    }

    info(message: string, ...meta: any[]): void {
        this._logger.info(message, meta);
    }

    warn(message: string, ...meta: any[]): void {
        this._logger.warn(message, meta);
    }

    error(message: string, ...meta: any[]): void {
        this._logger.error(message, meta);
    }

    debug(message: string, ...meta: any[]): void {
        this._logger.debug(message, meta);
    }

    verbose(message: string, ...meta: any[]): void {
        this._logger.verbose(message, meta);
    }
}

const wLogger = new WinstonLogger();

export { wLogger };
