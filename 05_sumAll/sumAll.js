const sumAll = function(a, b) {
    if(a < 0 || b < 0 || typeof(a) != 'number' || typeof(b) != 'number')
        return 'ERROR';
    let small = a > b ? b : a;
    let big = a > b ? a : b;
    let sum = 0;
//    return small;
    for(; small <= big; small++){
        sum += small;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
