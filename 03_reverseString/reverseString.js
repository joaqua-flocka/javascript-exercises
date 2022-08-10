const reverseString = function(string) {
    let i = string.length - 1;
    let newString = '';
    for(;i >= 0; i--){
        newString = newString.concat(string[i]);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
