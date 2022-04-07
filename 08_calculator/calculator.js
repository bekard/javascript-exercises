const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const sum = array.reduce(
    (previosValue, currentValue) => previosValue + currentValue, 0
  );
  return sum;
};

const multiply = function(array) {
  const multi = array.reduce(
    (prevValue, currentValue) => prevValue * currentValue, 1
  );
  return multi;
};

const power = function(value, pow) {
	return value ** pow;
};

const factorial = function(value) {
  let res = 1;
	for (let index = 1; index <= value; index++) {
    res *= index;
  }
  return res;
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
