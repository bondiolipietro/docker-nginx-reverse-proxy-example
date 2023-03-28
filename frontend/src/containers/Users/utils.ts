import userSvc from "@/services/user-svc";
import { JsUtils } from "@/utils/JsUtils";
import { UseQueryResult } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const newRandomUser = () => {
    const randomNum = Math.floor(Math.random() * 1000);
    return {
        name: `John Doe ${randomNum}`,
        email: `johndoe${randomNum}@email.com`,
        profilePicture: "https://picsum.photos/id/237/200/300",
    };
};

export const bulkAddNewUsers = async (numberOfUsers: number, usersQry: UseQueryResult) => {
    const toastRemaingUsers = toast.info(`Adding ${numberOfUsers} users...`, {
        autoClose: false,
    });

    await JsUtils.sleep(500);

    for (let i = 0; i < numberOfUsers; i++) {
        const newUser = newRandomUser();
        await JsUtils.sleep(500);
        await userSvc.createUser(newUser);
        toast.update(toastRemaingUsers, {
            render: `${numberOfUsers - i - 1} users remaining...`,
        });
    }

    toast.update(toastRemaingUsers, {
        render: `Added ${numberOfUsers} users!`,
        type: "success",
        autoClose: 2000,
    });

    usersQry.refetch();
};
