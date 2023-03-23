class AppConfig {
    public static readonly API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

    public static readonly API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
}

export { AppConfig };
