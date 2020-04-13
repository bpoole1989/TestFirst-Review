/* eslint-disable no-unused-vars */

const accessor = (object) => {
    return (prop, newValue = object[prop]) => {
        object[prop] = newValue;

        return object[prop];
    }
}