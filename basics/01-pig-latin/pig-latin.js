/* eslint-disable no-unused-vars */

const pigify = (str) => {
    return str.toLowerCase().split(' ')
        .map(word => {
                let letters = word.split('');

                while(!('aeiou'.includes(letters[0])) 
                    || (letters[0] === 'u' && letters[letters.length - 1] === 'q')) {
                        letters.push(letters.shift());
                }

                return `${letters.join('')}ay`;
            })
        .join(' ');     
}