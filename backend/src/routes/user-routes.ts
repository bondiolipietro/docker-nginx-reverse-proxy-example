import { constants } from "http2";

import { userController } from "@/controller/UserController";
import { Route } from "@/model/Route";
import {
    CreateUserReqValidator,
    GetUserReqValidator,
    UpdateUserReqValidator,
} from "@/model/validators";

const routes: Route[] = [];

routes.push(
    new Route({
        path: "/users",
        method: constants.HTTP2_METHOD_GET,
        controller: userController.getAll,
    })
);

routes.push(
    new Route({
        path: "/users/:id",
        method: constants.HTTP2_METHOD_GET,
        controller: userController.get,
        validator: GetUserReqValidator,
    })
);

routes.push(
    new Route({
        path: "/users",
        method: constants.HTTP2_METHOD_POST,
        controller: userController.create,
        validator: CreateUserReqValidator,
    })
);

routes.push(
    new Route({
        path: "/users/:id",
        method: constants.HTTP2_METHOD_PUT,
        controller: userController.update,
        validator: UpdateUserReqValidator,
    })
);

routes.push(
    new Route({
        path: "/users/:id",
        method: constants.HTTP2_METHOD_DELETE,
        controller: userController.delete,
        validator: GetUserReqValidator,
    })
);

export default routes;
