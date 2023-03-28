import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: "blue";
    label?: string;
};

export const COLOR_CLASS_MAP = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
};

export const Button: React.FC<ButtonProps> = (props) => {
    const { color, label, ...rest } = props;

    const colorClass = COLOR_CLASS_MAP[color || "blue"];

    return (
        <button className={`${colorClass} font-bold py-2 px-4 rounded disabled:opacity-50`} {...rest}>
            {label}
        </button>
    );
};
