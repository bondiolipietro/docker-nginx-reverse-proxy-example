import { User } from "@/model/entities";
import { UserType } from "@/model/validators";
import { ResourceAlreadyExistsError } from "@/model/errors";

import { IUserFacade } from "./interfaces";

class UserFacade implements IUserFacade {
    public create = async (user: UserType) => {
        if (await User.findOne({ email: user.email }).exec()) {
            throw new ResourceAlreadyExistsError("User");
        }
        const newUser = new User(user);
        await newUser.save();

        return newUser;
    };

    public update = async (id: string, user: UserType) => {
        const userToUpdate = User.findByIdAndUpdate(id, user, { new: true }).exec();

        return userToUpdate;
    };

    public delete = async (id: string) => {
        const userToDelete = await User.findByIdAndDelete(id).exec();

        return userToDelete;
    };

    public get = async (id: string) => {
        const user = await User.findById(id).exec();

        return user;
    };

    public getAll = async (skip: number, limit: number) => {
        const users = await User.find().skip(skip).limit(limit).exec();

        return users;
    };
}

const userFacade = new UserFacade();

export { userFacade };
