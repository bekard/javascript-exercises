const ftoc = function(temp) {
  let result = (temp - 32) * 5 / 9;
  return Number(result.toFixed(1));
};

const ctof = function(temp) {
  let result = temp * 9 / 5 + 32;
  return Number(result.toFixed(1));
};

console.log(ftoc(100));
console.log(ctof(0));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
