const caesar = function(inputString, shiftFactor) {
    
    let inputArray = inputString.split("");
    let shiftedString = "";

    for (let i=0; i<inputArray.length; i++) {
        shiftedString += shiftChar(inputArray[i],shiftFactor);
    }

    return shiftedString;
}

function shiftChar (character, shiftFactor) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let isUpper = (character === character.toUpperCase());
    let charLower = character.toLowerCase();
    
    // don't change non alphabet characters
    if (alphabet.indexOf(charLower) < 0) {
        return character;
    }

    let charIndex = alphabet.indexOf(charLower) + shiftFactor;

    // wrap if character is shifted past end of alphabet
    while (charIndex >= alphabet.length) {
        charIndex -= alphabet.length;
    }

    // wrap if character is shifted before beginning of alphabet
    while (charIndex < 0) {
        charIndex += alphabet.length;
    }

    if (isUpper) {
        return alphabet[charIndex].toUpperCase();
    } else {
        return alphabet[charIndex];
    }

}

module.exports = caesar