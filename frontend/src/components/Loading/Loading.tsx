import React from "react";

export type LoadingProps = {
    size?: "sm" | "md" | "lg";
};

export const SIZE_CLASS_MAP = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
};

export const Loading: React.FC<LoadingProps> = (props) => {
    const { size = "md" } = props;

    const sizeClass = SIZE_CLASS_MAP[size];

    return (
        <div className="flex h-full w-full items-center justify-center gap-4">
            <span
                className={`${sizeClass} animate-spin rounded-full border-4 border-solid border-blue-400 border-t-transparent`}
            />
        </div>
    );
};
