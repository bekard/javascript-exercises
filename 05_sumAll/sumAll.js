function validArguments(first, second) {
    return (first >= 0 && second >= 0) &&
        (Number.isInteger(first) && Number.isInteger(second));
}

function calculate(first, second) {
    let result = 0;
    if (first > second) {
        const temp  = first;
        first = second;
        second = temp;
    }
    for (let value = first; value <= second; value++) {
        result += value;
    }
    return result;    
}

const sumAll = function(first, second) {
    return validArguments(first, second) ? calculate(first,second) : "ERROR";
};



// Do not edit below this line
module.exports = sumAll;
