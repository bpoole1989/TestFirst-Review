// /* eslint-disable no-unused-vars */

const callAll = (object, funcs) => {
    return funcs.map(func => func.call(object));
}

