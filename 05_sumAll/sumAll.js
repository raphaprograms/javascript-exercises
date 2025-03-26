const sumAll = function(num1, num2) {
    // add start and end values
    let initial = num1 + num2;
    let midSum = 0;
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }
    else if (num1 % 1 !== 0 || num2 % 1 !== 0) {
        return "ERROR"
    }
    else if (num1 < 0 || num2 < 0){
        return "ERROR"
    }
    //add each intermediate value cumulatively
    else if (num1 < num2) {
        let difference = num2 - num1;
        for (i = 1; i < difference; i ++) {
            midSum += (num1 + i)
        }
        // add both numbers to get final number
        return midSum + initial;
    }
    else if (num1 > num2) {
        let difference = num1 - num2;
        for (i = 1; i < difference; i ++) {
            midSum += (num2 + i)
        }
        // add both numbers to get final number
        return midSum + initial;
    }
}

console.log(sumAll(8, 1000));

// Do not edit below this line
module.exports = sumAll;
