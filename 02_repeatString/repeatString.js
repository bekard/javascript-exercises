const repeatString = function(string, count) {
    let result = "";
    if (count < 0) {
        result = "ERROR";
    }
    else {
        for (let index = 0; index < count; index++) {
            result += string;        
        }
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
