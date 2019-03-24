const reverseString = function(forwardString) {
    let forwardArray = forwardString.split("");
    let reversed = ""
    for (let i=forwardArray.length-1; i>=0; i--) {
        reversed += forwardArray[i];
    }

    return reversed;
}

module.exports = reverseString
