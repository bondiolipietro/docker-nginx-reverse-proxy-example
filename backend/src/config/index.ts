import production from "./settings.json";

let settings: typeof production;

try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require, import/no-unresolved
    const dev = require("./settings.local.json");

    settings = process.env.NODE_ENV !== "development" ? production : dev;
} catch {
    settings = production;
}

export default settings;
