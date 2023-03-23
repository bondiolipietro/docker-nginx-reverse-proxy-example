import { logger } from "express-winston";

import { wLogger } from "@/util/logger";

const loggerMiddleware = logger({
    winstonInstance: wLogger._logger,
});

export { loggerMiddleware };
