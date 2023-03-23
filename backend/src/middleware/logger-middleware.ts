import { format, transports } from "winston";
import { logger } from "express-winston";

const loggerMiddleware = logger({
    transports: [new transports.Console()],
    format: format.combine(format.colorize(), format.json()),
});

export { loggerMiddleware };
