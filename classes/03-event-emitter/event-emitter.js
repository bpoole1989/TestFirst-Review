/* eslint-disable no-unused-vars */
class MyEventEmitter {
    constructor() {
        this.events = {};
    }

    addListener(eventName, fnc) {
        if (this.events[eventName] === undefined) this.events[eventName] = [fnc];

        else this.events[eventName].push(fnc);
    }

    emit(eventName, ...args) {
        this.events[eventName].forEach(fnc => fnc(...args));
    }
}