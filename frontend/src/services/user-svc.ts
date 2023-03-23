import { AppConfig } from "@/config";

class UserSvc {
    private baseUrl: string;
    private apiKey: string;
    private baseHeaders: Record<string, string> = {};

    constructor(baseUrl: string, apiKey: string) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
        this.configureBaseHeaders();
    }

    private configureBaseHeaders() {
        this.baseHeaders = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.apiKey}`,
        };
    }

    async getUserById(id: string): Promise<User> {
        const resp = await fetch(`${this.baseUrl}/users/${id}`);
        const user = await resp.json();
        return user;
    }

    async getAllUsers(props: { skip?: number; limit?: number }): Promise<User[]> {
        const { skip = 0, limit = 10 } = props;

        const resp = await fetch(`${this.baseUrl}/users?skip=${skip}&limit=${limit}`, {
            headers: this.baseHeaders,
        });
        const users = await resp.json();
        return users;
    }

    async createUser(user: Omit<User, "id">): Promise<User> {
        const resp = await fetch(`${this.baseUrl}/users`, {
            method: "POST",
            headers: this.baseHeaders,
            body: JSON.stringify(user),
        });
        const createdUser = await resp.json();
        return createdUser;
    }

    async updateUser(user: User): Promise<User> {
        const resp = await fetch(`${this.baseUrl}/users`, {
            method: "PUT",
            headers: this.baseHeaders,
            body: JSON.stringify(user),
        });
        const updatedUser = await resp.json();
        return updatedUser;
    }

    async deleteUser(id: string): Promise<Pick<User, "id">> {
        const resp = await fetch(`${this.baseUrl}/users/${id}`, {
            method: "DELETE",
            headers: this.baseHeaders,
        });
        const deletedUser = await resp.json();
        return deletedUser;
    }
}

const userSvc = new UserSvc(AppConfig.API_URL, AppConfig.API_KEY);

export default userSvc;
