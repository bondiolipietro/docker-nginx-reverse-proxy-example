import React from "react";
import { Loading } from "@/components/Loading";
import { UserCard } from "@/components/UserCard";

export type UsersListProps = {
    isLoading: boolean;
    users: User[];
};

export const UsersList: React.FC<UsersListProps> = (props) => {
    const { isLoading, users } = props;

    return (
        <>
            {isLoading ? (
                <Loading size="md" />
            ) : (
                <ul className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {users.map((user) => (
                        <UserCard
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            profilePicture={user.profilePicture}
                        />
                    ))}
                </ul>
            )}
        </>
    );
};
