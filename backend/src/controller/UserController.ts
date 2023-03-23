import { StatusCodes } from "http-status-codes";

import { userFacade } from "@/facade/UserFacade";
import {
    CreateUserReqType,
    CreateUserResType,
    DeleteUserReqType,
    DeleteUserResType,
    GetAllUsersReqType,
    GetAllUsersResType,
    GetUserReqType,
    GetUserResType,
    UpdateUserReqType,
    UpdateUserResType,
} from "@/model/validators";
import { NotFoundError } from "@/model/errors";
import { UserMapper } from "@/model/mappers";
import { IUserFacade } from "@/facade/interfaces";

import { IUserController } from "./interface/IUserController";

class UserController implements IUserController {
    private userFacade: IUserFacade;

    constructor(userFacade: IUserFacade) {
        this.userFacade = userFacade;
    }

    public create = async (req: CreateUserReqType, res: CreateUserResType) => {
        const user = req.body;

        const createdUser = await this.userFacade.create(user);

        return res.status(StatusCodes.CREATED).json(UserMapper.toUserType(createdUser));
    };

    public update = async (req: UpdateUserReqType, res: UpdateUserResType) => {
        const { id } = req.params;
        const { name, email, profilePicture } = req.body;

        const updatedUser = await this.userFacade.update(id, {
            name,
            email,
            profilePicture,
        });

        if (!updatedUser) {
            throw new NotFoundError("User");
        }

        return res.status(StatusCodes.OK).json(UserMapper.toUserType(updatedUser));
    };

    public delete = async (req: DeleteUserReqType, res: DeleteUserResType) => {
        const id = req.params.id;

        const deletedUser = await this.userFacade.delete(id);

        if (!deletedUser) {
            throw new NotFoundError("User");
        }

        return res.status(StatusCodes.OK).json(UserMapper.toUserWithOnlyId(deletedUser));
    };

    public get = async (req: GetUserReqType, res: GetUserResType) => {
        const id = req.params.id;

        const user = await this.userFacade.get(id);

        if (!user) {
            throw new NotFoundError("User");
        }

        return res.status(StatusCodes.OK).json(UserMapper.toUserType(user));
    };

    public getAll = async (req: GetAllUsersReqType, res: GetAllUsersResType) => {
        const { skip = 0, limit = 20 } = req.query;

        const users = await this.userFacade.getAll(skip, limit);

        if (!users) {
            throw new NotFoundError("Users");
        }

        return res.status(StatusCodes.OK).json(users.map((user) => UserMapper.toUserType(user)));
    };
}

const userController = new UserController(userFacade);

export { userController };
