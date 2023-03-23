import { UserType } from "@/model/validators/UserValidator";

export interface IUserFacade {
    create: (user: UserType) => Promise<UserType>;

    update: (id: string, user: UserType) => Promise<UserType>;

    delete: (id: string) => Promise<UserType>;

    get: (id: string) => Promise<UserType>;

    getAll: () => Promise<UserType[]>;
}
