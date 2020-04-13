/* eslint-disable no-unused-vars */

// const vowelsCount = (str) => {
//     let letters = str.toLowerCase().split('');
    
//     return {
//         a: letters.reduce((total, letter) => total + Number(letter === 'a'), 0), 
//         e: letters.reduce((total, letter) => total + Number(letter === 'e'), 0), 
//         i: letters.reduce((total, letter) => total + Number(letter === 'i'), 0), 
//         o: letters.reduce((total, letter) => total + Number(letter === 'o'), 0), 
//         u: letters.reduce((total, letter) => total + Number(letter === 'u'), 0), 
//         total: letters.reduce((total, letter) => total + Number('aeiou'.includes(letter)), 0)
//     }
// }

//alternative
const vowelsCount = (str) => {
    return str.toLowerCase().split('')
        .reduce(
            (vowelObj, letter) => {
                if ('aeiou'.includes(letter)) {
                    vowelObj[letter]++;
                    vowelObj.total++;
                }

                return vowelObj;
            }, 
            {a: 0, e: 0, i: 0, o: 0, u: 0, total: 0}
        );
}
