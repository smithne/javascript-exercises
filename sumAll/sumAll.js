const sumAll = function(numOne, numTwo) {
    if ((typeof numOne !== 'number') || (typeof numTwo !== 'number')) {
        return 'ERROR';
    } else if ((numOne < 0) || (numTwo < 0)) {
        return 'ERROR';
    }

    let startIndex = Math.min(numOne, numTwo);
    let endIndex = Math.max(numOne, numTwo);

    let total = 0;

    for (let i = startIndex; i <= endIndex; i++) {
        total += i;
    }

    return total;
}

module.exports = sumAll
