//Example: Login system
var Auth = /** @class */ (function () {
    function Auth() {
        this.authenticated = false;
    }
    Auth.getInstance = function () {
        if (!Auth.instance) {
            Auth.instance = new Auth();
        }
        return Auth.instance;
    };
    Auth.prototype.login = function () {
        this.authenticated = true;
    };
    Auth.prototype.logout = function () {
        this.authenticated = false;
    };
    Auth.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    return Auth;
}());
var log1 = Auth.getInstance();
var log2 = Auth.getInstance();
console.log(log1 === log2);
console.log(log1.isAuthenticated());
log2.login();
console.log(log1.isAuthenticated());
