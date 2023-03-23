import { Response } from "express";
import { z } from "zod";

export const UserIdValidator = z.object({
    id: z.string().uuid(),
});

export type UserIdType = z.infer<typeof UserIdValidator>;

export const PartialUserValidator = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    profilePicture: z.string().optional(),
});

export type PartialUserType = z.infer<typeof PartialUserValidator>;

export const UserValidator = PartialUserValidator.extend(UserIdValidator.shape);

export type UserType = z.infer<typeof UserValidator>;

// Get

export const GetUserReqValidator = z.object({
    params: UserIdValidator,
});

export type GetUserReqType = z.infer<typeof GetUserReqValidator>;

export type GetUserResType = Response<UserType>;

// Get All

export const GetAllUsersReqValidator = z.object({
    query: z.object({
        limit: z.number().optional(),
        skip: z.number().optional(),
    }),
});

export type GetAllUsersReqType = z.infer<typeof GetAllUsersReqValidator>;

export type GetAllUsersResType = Response<UserType[]>;

// Create

export const CreateUserReqValidator = z.object({
    body: PartialUserValidator,
});

export type CreateUserReqType = z.infer<typeof CreateUserReqValidator>;

export type CreateUserResType = Response<UserType>;

// Update

export const UpdateUserReqValidator = z.object({
    params: UserIdValidator,
    body: UserValidator,
});

export type UpdateUserReqType = z.infer<typeof UpdateUserReqValidator>;

export type UpdateUserResType = Response<UserType>;

// Delete

export const DeleteUserReqValidator = z.object({
    params: UserIdValidator,
});

export type DeleteUserReqType = z.infer<typeof DeleteUserReqValidator>;

export type DeleteUserResType = Response<UserType>;
