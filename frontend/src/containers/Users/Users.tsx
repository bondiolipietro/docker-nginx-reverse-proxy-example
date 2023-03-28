"use client";
import React, { useState } from "react";

import userSvc from "@/services/user-svc";
import { useQuery } from "@tanstack/react-query";
import { JsUtils } from "@/utils/JsUtils";
import { useDebounce } from "@/hooks/useDebounce";

import { UsersList } from "./UsersList";
import { bulkAddNewUsers } from "./utils";
import { Button } from "@/components/Button";

const USERS_LIMIT_PER_PAGE = 10;

export const Users: React.FC = () => {
    const [page, setPage] = useState(1);

    const debouncedPage = useDebounce(page, 500);

    const usersQry = useQuery(["users", debouncedPage], async () => {
        await JsUtils.sleep(500);

        const skip = (debouncedPage - 1) * USERS_LIMIT_PER_PAGE;

        return await userSvc.getAllUsers({ skip });
    });
    const users = usersQry.data || [];

    const HAS_PREV_PAGE = page > 1;
    const prevPage = () => {
        if (HAS_PREV_PAGE) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    const HAS_NEXT_PAGE = users.length === USERS_LIMIT_PER_PAGE;
    const nextPage = () => {
        if (HAS_NEXT_PAGE) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div className="grid grid-flow-row-dense gap-8 h-full">
            <h1 className="text-4xl font-bold text-center">Users</h1>
            <div className="flex justify-end">
                <Button
                    label="Bulk Add New Users"
                    onClick={() => bulkAddNewUsers(USERS_LIMIT_PER_PAGE, usersQry)}
                />
            </div>
            <div className="h-full grow">
                <UsersList isLoading={usersQry.isLoading} users={users} />
            </div>
            <div className="flex justify-center gap-4 items-center">
                <Button label="Previous Page" onClick={prevPage} disabled={!HAS_PREV_PAGE} />

                <span className="text-xl font-bold">{page}</span>
                <Button label="Next Page" onClick={nextPage} disabled={!HAS_NEXT_PAGE} />
            </div>
        </div>
    );
};
