"use client";
import * as React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <>
            <ToastContainer />
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
        </>
    );
}
