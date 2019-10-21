interface iOSDevice {
    useLightning():void;
}

interface AndoridDevice {
    useUSB():void;
}

class iPhone implements iOSDevice {
    useLightning() {
        console.log('Using lightning port...');
    }
}

class AndoridPhone implements AndoridDevice {
    useUSB() {
        console.log('Using USB port')
    }
}

class LightningToUSBAdapter implements AndoridDevice {
    iOSDevice: iPhone;

    constructor(iphone: iPhone) {
        this.iOSDevice = iphone;
    }

    useUSB(){
        this.iOSDevice.useLightning()
        console.log('Convert Lightning to USB!');
    }
}

class USBToLightning implements iOSDevice {
    androidDevice: AndoridDevice;

    constructor(android: AndoridDevice) {
        this.androidDevice = android;
    }

    useLightning(){
        this.androidDevice.useUSB();
        console.log('Convert USB to Lightning!');
    }
}

const iphone = new iPhone();
const usbAdapter = new LightningToUSBAdapter(iphone);

usbAdapter.useUSB();

const newestSamsungPhone = new AndoridPhone()
const lightningAdapter = new USBToLightning(newestSamsungPhone);

lightningAdapter.useLightning();
