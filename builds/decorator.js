//Tesla car configurator
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
var Car = /** @class */ (function () {
    function Car(description, baseCost) {
        this.description = description;
        this.baseCost = baseCost;
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    Car.prototype.cost = function () {
        return this.baseCost;
    };
    ;
    return Car;
}());
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        return _super.call(this, 'Model S', 80000) || this;
    }
    return ModelS;
}(Car));
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        return _super.call(this, 'Model X', 85000) || this;
    }
    return ModelX;
}(Car));
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions(decoratedCar, description, optionCost) {
        var _this = _super.call(this, description, optionCost) || this;
        _this.decoratedCar = decoratedCar;
        _this.description = description;
        _this.optionCost = optionCost;
        return _this;
    }
    CarOptions.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ', ' + this.description;
    };
    ;
    CarOptions.prototype.cost = function () {
        return this.decoratedCar.cost() + this.optionCost;
    };
    ;
    return CarOptions;
}(Car));
var AutoPilot = /** @class */ (function (_super) {
    __extends(AutoPilot, _super);
    function AutoPilot(car) {
        return _super.call(this, car, 'AutoPilot', 5000) || this;
    }
    return AutoPilot;
}(CarOptions));
var PerformancePack = /** @class */ (function (_super) {
    __extends(PerformancePack, _super);
    function PerformancePack(car) {
        return _super.call(this, car, 'Performance Pack', 10000) || this;
    }
    return PerformancePack;
}(CarOptions));
//Base model
var myTesla = new ModelS();
console.log(myTesla.getDescription());
console.log(myTesla.cost());
//With options
myTesla = new PerformancePack(myTesla);
console.log(myTesla.getDescription());
console.log(myTesla.cost());
myTesla = new AutoPilot(myTesla);
console.log(myTesla.getDescription());
console.log(myTesla.cost());
