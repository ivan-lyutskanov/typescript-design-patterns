//Example: Company's Departments
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department() {
    }
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITDepartment.prototype.createEmployee = function (name) {
        return new Programmer(name);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountingDepartment.prototype.createEmployee = function (name) {
        return new Accountant(name);
    };
    return AccountingDepartment;
}(Department));
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.id = name;
    }
    return Employee;
}());
var Accountant = /** @class */ (function (_super) {
    __extends(Accountant, _super);
    function Accountant(id) {
        return _super.call(this, id) || this;
    }
    Accountant.prototype.introduce = function () {
        console.log("My name is " + this.id + " and I deal with company's financial records.");
    };
    return Accountant;
}(Employee));
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(id) {
        return _super.call(this, id) || this;
    }
    Programmer.prototype.introduce = function () {
        console.log("My name is " + this.id + " and I do code.");
    };
    return Programmer;
}(Employee));
var itDep = new ITDepartment();
var accDep = new AccountingDepartment();
var john = itDep.createEmployee('John West');
var sara = accDep.createEmployee('Sara Smith');
john.introduce();
sara.introduce();
