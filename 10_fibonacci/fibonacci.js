const fibonacci = function(n) {
    let seqnum 
    if (typeof n !== 'number'){
        seqnum = parseInt(n);
    } else {
        seqnum = n
    }

    if (seqnum < 0) return "OOPS";
    if (seqnum == 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= seqnum; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
