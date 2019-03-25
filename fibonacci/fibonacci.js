const fibonacci = function(sequence) {
    if (sequence < 1) {
        return "OOPS";
    } else if (sequence == 1) {
        return 1;
    }
    
    let first = 0;
    let second = 1;
    let counter = 1; 

    while (counter < sequence) {
        let holder = first;
        first = second;
        second = first + holder;
        counter++;
    }

    return second;
}

module.exports = fibonacci

