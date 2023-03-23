import Image from "next/image";
import React from "react";

export type UserCardProps = {
    name: string;
    email: string;
    profilePicture: string;
};

export const UserCard: React.FC<UserCardProps> = (props) => {
    const { name, email, profilePicture } = props;

    return (
        <div className="bg-slate-300 w-full py-8 px-6 flex flex-col gap-5 items-center shadow-md hover:shadow-lg duration-300 cursor-pointer hover:bg-slate-400">
            <img src={profilePicture} alt={name} className="w-32 h-32 rounded-full"/>
            <h1>{name}</h1>
            <h2>{email}</h2>
        </div>
    );
};
