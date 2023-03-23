import { Document, model, Schema, SchemaTimestampsConfig } from "mongoose";

import { UserType } from "@/model/validators";

export type UserDocument = UserType & Document & SchemaTimestampsConfig;

const UserSchema = new Schema<UserDocument>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        profilePicture: { type: String, required: false },
    },
    {
        timestamps: true,
    }
);

const User = model<UserDocument>("User", UserSchema);

export { User };
