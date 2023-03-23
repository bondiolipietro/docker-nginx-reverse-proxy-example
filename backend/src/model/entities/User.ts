import { model, Schema } from "mongoose";

import { UserType } from "@/model/validators/UserValidator";

const UserSchema = new Schema<UserType>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        profilePicture: { type: String, required: false },
    },
    {
        timestamps: true,
    }
);

const User = model<UserType>("User", UserSchema);

export { User };
