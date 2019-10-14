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
    function Car() {
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Model S';
        _this.baseCost = 80000;
        return _this;
    }
    return ModelS;
}(Car));
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Model X';
        _this.baseCost = 85000;
        return _this;
    }
    return ModelX;
}(Car));
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
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
        var _this = _super.call(this) || this;
        _this.description = 'AutoPilot';
        _this.optionCost = 5000;
        _this.decoratedCar = car;
        return _this;
    }
    return AutoPilot;
}(CarOptions));
var PerformancePack = /** @class */ (function (_super) {
    __extends(PerformancePack, _super);
    function PerformancePack(car) {
        var _this = _super.call(this) || this;
        _this.description = 'Performance Pack';
        _this.optionCost = 10000;
        _this.decoratedCar = car;
        return _this;
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
