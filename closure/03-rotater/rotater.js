/* eslint-disable no-unused-vars */

const rotater = (string) => {
    let directionLeft = true;

    return (num) => {
        if (num === string.length) {
            directionLeft = !directionLeft;
            return string;
        }

        if (directionLeft)
            return string.slice(num) + string.slice(0, num);
        
        return string.slice(string.length - num) + string.slice(0, string.length- num);
    }
}