const fibonacci = function(value) {
    value = Number(value);
    if (value >= 0) {
        if (value === 0) {
            return 0;
        }
        else if (value === 1) {
            return 1;
        }
        return fibonacci(value - 2) + fibonacci(value - 1);
    }
    return "OOPS";
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
