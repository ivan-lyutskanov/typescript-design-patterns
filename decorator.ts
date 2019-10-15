//Tesla car configurator

abstract class Car {
    
    constructor(protected description: string, protected baseCost: number) {}

    public getDescription(): string {
        return this.description;
    }

    public cost(): number {
        return this.baseCost;
    };
}

class ModelS extends Car {

    constructor(){
        super('Model S',80000)
    }
}

class ModelX extends Car {
 
    constructor(){
        super('Model X', 85000)
    }
}

abstract class CarOptions extends Car {

    constructor(protected decoratedCar: Car, protected description: string, protected optionCost: number) {
        super(description, optionCost)
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', ' + this.description;
    };
    public cost(): number {
        return this.decoratedCar.cost() + this.optionCost;
    };
}

class AutoPilot extends CarOptions {

    constructor(car: Car) {
        super(car, 'AutoPilot', 5000)
    }
}

class PerformancePack extends CarOptions {

    constructor(car: Car) {
        super(car, 'Performance Pack', 10000);
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
