interface Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers():void;
    //Subject specific props below
    getTemperature(): number;
    preset: number
}

interface Observer {
    update(temperature: number):void;
}

class Thermostat implements Subject {
    readonly preset:number = 23;
    private temperature: number = 0;
    private observers: Observer[] = [];

    registerObserver(o: Observer): void {
        this.observers.push(o);
    }
    removeObserver(o: Observer): void {
        const i = this.observers.indexOf(o);
        this.observers.splice(i, 1);
    }

    notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    getTemperature(): number {
        return this.temperature;
    }

    measureTemperature(temp: number) {
        console.log(`Thermostat: new temperature is measured: ${temp}C`);
        this.temperature = temp; 
        this.notifyObservers();
    }

}

class CentralHeatingSystem implements Observer {

    constructor(private termostat: Subject) {
        this.termostat.registerObserver(this);
    }

    update(temperature: number): void {
        if (temperature < this.termostat.preset) {
            console.log('CentralHeatingSystem: is working...')
        }
    }

}

class Fan implements Observer {
    
    constructor(private termostat: Subject) {
        this.termostat.registerObserver(this);
    }

    update(temperature: number): void {
        if (temperature > this.termostat.preset) {
            console.log('Fan: start cooling...')
        }
    }

}

const thermostat = new Thermostat();

const tempDisplay = new CentralHeatingSystem(thermostat);

const fan = new Fan(thermostat);

thermostat.measureTemperature(18);
thermostat.measureTemperature(36);
