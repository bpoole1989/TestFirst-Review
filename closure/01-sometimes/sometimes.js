/* eslint-disable no-unused-vars */
const sometimes = (func) => {
    let callCount = 0;

    return (...args) => {
        callCount++;
        
        return (callCount%2 || callCount < 4) ? func(...args) : 'I do not know!'; 
    }
}