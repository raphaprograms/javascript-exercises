const convertToCelsius = function(temp) {
    C = ((temp - 32) * (5/9));
    C = Number(C.toFixed(1));
    return C;
};

const convertToFahrenheit = function(temp) {
    F = ((temp * (9/5)) + 32);
    return Number(F.toFixed(1));;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
