var iPhone = /** @class */ (function () {
    function iPhone() {
    }
    iPhone.prototype.useLightning = function () {
        console.log('Using lightning port...');
    };
    return iPhone;
}());
var AndoridPhone = /** @class */ (function () {
    function AndoridPhone() {
    }
    AndoridPhone.prototype.useUSB = function () {
        console.log('Using USB port');
    };
    return AndoridPhone;
}());
var LightningToUSBAdapter = /** @class */ (function () {
    function LightningToUSBAdapter(iphone) {
        this.iOSDevice = iphone;
    }
    LightningToUSBAdapter.prototype.useUSB = function () {
        this.iOSDevice.useLightning();
        console.log('Convert Lightning to USB!');
    };
    return LightningToUSBAdapter;
}());
var USBToLightning = /** @class */ (function () {
    function USBToLightning(android) {
        this.androidDevice = android;
    }
    USBToLightning.prototype.useLightning = function () {
        this.androidDevice.useUSB();
        console.log('Convert USB to Lightning!');
    };
    return USBToLightning;
}());
var iphone = new iPhone();
var usbAdapter = new LightningToUSBAdapter(iphone);
usbAdapter.useUSB();
var newestSamsungPhone = new AndoridPhone();
var lightningAdapter = new USBToLightning(newestSamsungPhone);
lightningAdapter.useLightning();
