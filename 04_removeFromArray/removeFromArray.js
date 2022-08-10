const removeFromArray = function(array, item) {
    let i = array.length - 1;
    for(; i >= 0; i--){
        let j = arguments.length - 1;
        for(; j >= 1; j--){
            if (array[i] === arguments[j]){
                array.splice(i,1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
