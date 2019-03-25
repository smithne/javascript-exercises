const palindromes = function(inputString) {
    reversed = "";

    inputString = inputString.toLowerCase().replace(/[^A-Za-z]/g, "");
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversed += inputString.charAt(i);
    }
    console.log(inputString + ' ' + reversed);
    return reversed == inputString;
}

module.exports = palindromes
