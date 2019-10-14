//Tesla car configurator

abstract class Car {
    description!: string;
    baseCost!: number;

    public getDescription(): string {
        return this.description;
    }

    public cost(): number {
        return this.baseCost;
    };
}

class ModelS extends Car {
    description = 'Model S';
    baseCost = 80000;
}

class ModelX extends Car {
    description = 'Model X';
    baseCost = 85000;
}

abstract class CarOptions extends Car {
    decoratedCar!: Car;
    description!: string;
    optionCost!: number;

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', ' + this.description;
    };
    public cost(): number {
        return this.decoratedCar.cost() + this.optionCost;
    };
}

class AutoPilot extends CarOptions {
    decoratedCar: Car;
    description: string = 'AutoPilot';
    optionCost: number = 5000;

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }
}

class PerformancePack extends CarOptions {
    decoratedCar: Car;
    description: string = 'Performance Pack';
    optionCost: number = 10000;

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }
}

//Base model
let myTesla = new ModelS();
console.log(myTesla.getDescription());
console.log(myTesla.cost());

//With options
myTesla = new PerformancePack(myTesla);
console.log(myTesla.getDescription());
console.log(myTesla.cost());

myTesla = new AutoPilot(myTesla);
console.log(myTesla.getDescription());
console.log(myTesla.cost());
