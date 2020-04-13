/* eslint-disable no-unused-vars */

Array.prototype.maap = function(func) {
    let mapped = [];
    
    this.forEach(val => mapped.push(func(val)));

    return mapped;
}

Array.prototype.fiilter = function(func) {
    let mapped = [];
    
    this.forEach(val => {if (func(val)) mapped.push(val)});

    return mapped;
}

Array.prototype.reeduce = function(func, start = 0) {
    this.forEach(val => {start = func(start, val)});

    return start;
}