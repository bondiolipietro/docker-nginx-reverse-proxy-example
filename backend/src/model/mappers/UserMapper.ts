import { UserType } from "@/model/validators";
import { UserDocument } from "@/model/entities";

class UserMapper {
    static toUserType(user: UserDocument): UserType {
        return {
            id: user._id,
            name: user.name,
            email: user.email,
            profilePicture: user.profilePicture,
        };
    }

    static toUserWithOnlyId(user: UserDocument): UserType {
        return {
            id: user._id,
        };
    }
}

export { UserMapper };
