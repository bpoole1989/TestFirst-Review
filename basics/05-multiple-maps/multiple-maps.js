/* eslint-disable no-unused-vars */
const multipleMaps = (keys, objects) => {
    return keys.map(key => {
        for (let obj of objects) {
            if (key in obj) return obj[key];
        }
    })
}