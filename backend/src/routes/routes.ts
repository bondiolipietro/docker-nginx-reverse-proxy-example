import fs from "fs";

import { Route } from "@/model/Route";

const ROUTES_PATH = "./src/routes";
const ROUTES_SUFFIX = "-routes.ts";

let routes: Route[];

const getRoutes = () => {
    if (routes) {
        return routes;
    }

    const files = fs.readdirSync(ROUTES_PATH);
    const routes_files = files.filter((f) => f.includes(ROUTES_SUFFIX));

    const INITIAL_ROUTE_LIST: Route[] = [];

    routes = routes_files.reduce((prev, routes_file) => {
        const file_path = `./${routes_file}`;
        // eslint-disable-next-line import/no-dynamic-require, global-require, @typescript-eslint/no-var-requires
        const file_routes = require(file_path).default as Route[];
        return [...prev, ...file_routes];
    }, INITIAL_ROUTE_LIST);

    return routes;
};

export { getRoutes };
