const repeatString = function(inputString, times) {
    
    if (times < 0) {
        return 'ERROR';
    }

    let baseString = '';
    for (let i = 0; i < times; i++) {
        baseString += inputString;
    }

    return baseString;
}

module.exports = repeatString
