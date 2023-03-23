import { rateLimit } from "express-rate-limit";

const rateLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 15 minutes
    max: 500,
    standardHeaders: true,
    legacyHeaders: false,
});

export { rateLimiter };
