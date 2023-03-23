import { StatusCodes } from "http-status-codes";

import { IUserFacade } from "@/facades/interfaces/IUserFacade";
import userFacade from "@/facades/UserFacade";
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
} from "@/model/validators/UserValidator";

import { IUserController } from "./interface/IUserController";

class UserController implements IUserController {
    private userFacade: IUserFacade;

    constructor(userFacade: IUserFacade) {
        this.userFacade = userFacade;
    }

    public create = async (req: CreateUserReqType, res: CreateUserResType) => {
        const user = req.body;

        try {
            const createdUser = await this.userFacade.create(user);

            return res.status(StatusCodes.CREATED).json(createdUser);
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).json(error);
        }
    };

    public update = async (req: UpdateUserReqType, res: UpdateUserResType) => {
        const { id } = req.params;
        const { name, email, profilePicture } = req.body;

        try {
            const updatedUser = await this.userFacade.update(id, {
                name,
                email,
                profilePicture,
            });

            return res.status(StatusCodes.OK).json(updatedUser);
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).json(error);
        }
    };

    public delete = async (req: DeleteUserReqType, res: DeleteUserResType) => {
        const id = req.params.id;

        try {
            const deletedUser = await this.userFacade.delete(id);

            return res.status(StatusCodes.OK).json(deletedUser);
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).json(error);
        }
    };

    public get = async (req: GetUserReqType, res: GetUserResType) => {
        const id = req.params.id;

        try {
            const user = await this.userFacade.get(id);

            return res.status(StatusCodes.OK).json(user);
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).json(error);
        }
    };

    public getAll = async (req: GetAllUsersReqType, res: GetAllUsersResType) => {
        try {
            const users = await this.userFacade.getAll();

            return res.status(StatusCodes.OK).json(users);
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).json(error);
        }
    };
}

const userController = new UserController(userFacade);

export default userController;
