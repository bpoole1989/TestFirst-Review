// /* eslint-disable no-unused-vars */

class Vehicle {
    constructor([wheels, fuel, make]) {
        this.wheelTotal = wheels;
        this.energySource = fuel;
        this.manufacturer = make;
        this.isOn = false;
    }

    getSpec(spec) {
        return this[spec];
    }
}

class Tesla extends Vehicle {
    constructor([range, model, charge, chargeTime, [[wheels, fuel, make]]]) {
        super([wheels, fuel, make]);
        this.milesPerCharge = range;
        this.model = model;
        this.chargePercentage = charge;
        this.minutesToCharge = chargeTime;
    }

    minutesToFullCharge(currentCharge) {
        return `${this.minutesToCharge * (1 - currentCharge / 100)} minutes until the charge is full!`;
    }
}