/*
const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "");
    let begin = 0;
    let end = string.length - 1;
    for(; begin < end; ) {
        if (string[begin++] != string[end--]) {
            return false;
        }
    }
    return true;
};
*/

const palindromes = function (string) {
    processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return (
        processedString
            .split("")
            .reverse()
            .join("") == processedString
    );
};


// Do not edit below this line
module.exports = palindromes;
