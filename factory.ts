//Example: Company's Departments

abstract class Department {

    public abstract createEmployee(id:string): Employee;

}

class ITDepartment extends Department {

    public createEmployee(name: string): Employee {
        return new Programmer(name);
    }
}

class AccountingDepartment extends Department {
    public createEmployee(name:string): Employee {
        return new Accountant(name);
    }
}

abstract class Employee {
    protected id: string;

    constructor(name: string) {
        this.id = name;
    }

    public abstract introduce(): void;
}

class Accountant extends Employee {

    constructor(id: string) {
        super(id);
    }

    introduce() {
        console.log(`My name is ${this.id} and I deal with company's financial records.`);
    }
}

class Programmer extends Employee {

    constructor(id: string) {
        super(id);
    }

    introduce() {
        console.log(`My name is ${this.id} and I do code.`);
    }

}

const itDep = new ITDepartment();
const accDep = new AccountingDepartment();

const john = itDep.createEmployee('John West');
const sara = accDep.createEmployee('Sara Smith');

john.introduce();
sara.introduce();