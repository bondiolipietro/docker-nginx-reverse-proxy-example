/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            height: {
                svh: "calc(var(--vh, 1vh) * 100)",
            },
            minHeight: {
                svh: "calc(var(--vh, 1vh) * 100)",
            },
            maxHeight: {
                svh: "calc(var(--vh, 1vh) * 100)",
            },
        },
    },
    plugins: [],
};
