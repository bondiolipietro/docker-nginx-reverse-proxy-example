export {};

declare global {
    type User = {
        id: string;
        name: string;
        email: string;
        profilePicture: string;
    };
}
