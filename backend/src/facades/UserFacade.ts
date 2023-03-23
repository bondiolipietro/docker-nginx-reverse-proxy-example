import { UserType } from "@/model/validators/UserValidator";

import { IUserFacade } from "./interfaces/IUserFacade";

class UserFacade implements IUserFacade {
    public create = async (user: UserType) => {
        throw new Error("Method not implemented.");
    };

    public update = async (id: string, user: UserType) => {
        throw new Error("Method not implemented.");
    };

    public delete = async (id: string) => {
        throw new Error("Method not implemented.");
    };

    public get = async (id: string) => {
        throw new Error("Method not implemented.");
    };

    public getAll = async () => {
        throw new Error("Method not implemented.");
    };
}

const userFacade = new UserFacade();

export default userFacade;
