const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	let total = 0;
  for (item of array) {
    total += item;
  }
  return total;
};

const multiply = function(array) {
  let total = array[0];
  for(let i = 1; i < array.length; i++){
    total *= array[i];
  }
  return total;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	if(num === 0){
    return 1;
  }
  let total = num;
  for(let i = num - 1; i > 0; i--){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
