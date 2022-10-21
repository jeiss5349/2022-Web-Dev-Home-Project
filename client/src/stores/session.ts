
import { reactive } from "vue";

const session = reactive( {
    user: null as User | null,
});

export function login(firstName: string, lastName: string, adminUser: boolean) {
    session.user = {
        firstName,
        lastName,
        adminUser,
    };
}

export function logout() {
    session.user = null;
}

export class User {
    public firstName?: string;
    public lastName?: string;
    public adminUser?: boolean;
}


export function isLoggedIn() {
    return session.user !== null;
}

export default session;