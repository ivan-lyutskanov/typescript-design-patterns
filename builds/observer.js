var Thermostat = /** @class */ (function () {
    function Thermostat() {
        this.preset = 23;
        this.temperature = 0;
        this.observers = [];
    }
    Thermostat.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    Thermostat.prototype.removeObserver = function (o) {
        var i = this.observers.indexOf(o);
        this.observers.splice(i, 1);
    };
    Thermostat.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature);
        }
    };
    Thermostat.prototype.getTemperature = function () {
        return this.temperature;
    };
    Thermostat.prototype.measureTemperature = function (temp) {
        console.log("Thermostat: new temperature is measured: " + temp + "C");
        this.temperature = temp;
        this.notifyObservers();
    };
    return Thermostat;
}());
var CentralHeatingSystem = /** @class */ (function () {
    function CentralHeatingSystem(termostat) {
        this.termostat = termostat;
        this.termostat.registerObserver(this);
    }
    CentralHeatingSystem.prototype.update = function (temperature) {
        if (temperature < this.termostat.preset) {
            console.log('CentralHeatingSystem: is working...');
        }
    };
    return CentralHeatingSystem;
}());
var Fan = /** @class */ (function () {
    function Fan(termostat) {
        this.termostat = termostat;
        this.termostat.registerObserver(this);
    }
    Fan.prototype.update = function (temperature) {
        if (temperature > this.termostat.preset) {
            console.log('Fan: start cooling...');
        }
    };
    return Fan;
}());
var termostat = new Thermostat();
var tempDisplay = new CentralHeatingSystem(termostat);
var fan = new Fan(termostat);
termostat.measureTemperature(18);
termostat.measureTemperature(36);
