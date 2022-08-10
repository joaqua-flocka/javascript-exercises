const fibonacci = function(num) {
    let lastNumber = 0;
    let sum = 1;
    if(num < 1)
        return 'OOPS';
    for(let i = 1; i < 3; i++){
        let temp = sum;
        sum += lastNumber;
        lastNumber = temp;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
