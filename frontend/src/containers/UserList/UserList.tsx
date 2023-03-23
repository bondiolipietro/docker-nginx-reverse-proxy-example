"use client";
import React from "react";

import userSvc from "@/services/user-svc";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "@/components/Loading";
import { JsUtils } from "@/utils/JsUtils";
import { UserCard } from "@/components/UserCard";

export const UserList: React.FC = () => {
    const usersQry = useQuery(["users"], async () => {
        await JsUtils.sleep(1000);
        return await userSvc.getAllUsers({});
    });
    const users = usersQry.data || [];

    if (usersQry.isLoading) {
        return <Loading size="md" />;
    }

    return (
        <ul className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    profilePicture={user.profilePicture}
                />
            ))}
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    profilePicture={user.profilePicture}
                />
            ))}
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    profilePicture={user.profilePicture}
                />
            ))}
        </ul>
    );
};
