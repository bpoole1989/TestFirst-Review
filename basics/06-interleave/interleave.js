function interleave(strings) {
    let newString = '';
    let stringArray = Array.from(arguments);

    for(let i = 0; stringArray.some(str => i < str.length); i++) {
        for (str of stringArray) {
            if (i < str.length) newString += str[i];
        }
    }

    return newString;
}