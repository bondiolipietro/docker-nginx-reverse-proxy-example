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

export interface IUserController {
    create: (req: CreateUserReqType, res: CreateUserResType) => Promise<CreateUserResType>;

    update: (req: UpdateUserReqType, res: UpdateUserResType) => Promise<UpdateUserResType>;

    delete: (req: DeleteUserReqType, res: DeleteUserResType) => Promise<DeleteUserResType>;

    get: (req: GetUserReqType, res: GetUserResType) => Promise<GetUserResType>;

    getAll: (req: GetAllUsersReqType, res: GetAllUsersResType) => Promise<GetAllUsersResType>;
}
