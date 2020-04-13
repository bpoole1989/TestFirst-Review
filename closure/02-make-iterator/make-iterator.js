// /* eslint-disable no-unused-vars */

const makeIterator = (array) => {
    let index = 0;

    return {
        getNext() {
            let nextVal = array[index++];

            return {
                value: nextVal, 
                done: index > array.length
            };
        },

        getIndex() {
            if (index > array.length) 
                return array.length - 1;
            
            return index;
        }
    }
}


