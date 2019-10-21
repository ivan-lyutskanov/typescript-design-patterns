//Example: Login system

class Auth {
    private static instance: Auth;
    private authenticated: boolean;

    private constructor() {
        this.authenticated = false;
    }

    public static getInstance(): Auth {
        if (!Auth.instance) {
            Auth.instance = new Auth();
        }
        return Auth.instance;
    }

    public login(){
        this.authenticated = true;
    }


    public logout() {
        this.authenticated = false
    }

    public isAuthenticated(): Boolean {
        return this.authenticated;
    }

}

const log1 = Auth.getInstance(); 
const log2 = Auth.getInstance();

console.log(log1 === log2);
console.log(log1.isAuthenticated());
log2.login();
console.log(log1.isAuthenticated());