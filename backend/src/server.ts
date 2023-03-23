import { app } from "./app";

(async () => {
    await app.build();
    app.start();
})();
