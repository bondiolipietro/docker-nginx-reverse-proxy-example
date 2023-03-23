import Link from "next/link";
import React from "react";

export const Navbar: React.FC = () => {
    return (
        <nav className="bg-slate-300 flex justify-between w-full">
            <Link href="/" className="py-3 px-6 text-gray-600 hover:text-blue-400 duration-300">
                Home
            </Link>
            <div className="h-full flex">
                <Link
                    href="/about"
                    className="py-3 px-6 text-gray-600 hover:text-blue-400 duration-300"
                >
                    About
                </Link>
                <Link
                    href="/users"
                    className="py-3 px-6 text-gray-600 hover:text-blue-400 duration-300"
                >
                    Users
                </Link>
            </div>
        </nav>
    );
};
