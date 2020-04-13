// /* eslint-disable no-unused-vars, no-extend-native */

Array.prototype.doNotInclude = function(array) {
    if (!(Array.isArray(array))) array = [array];

    return this.filter((elem, index) => !(array.includes(index)));
}



