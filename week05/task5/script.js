let word = prompt("Please enter the string:")

function explodeString(word) {
    let part = "";
    let result = "";

    for (const letter of word) {
        part += letter;
        result += part;
    }

    return result;
}

console.log(explodeString(word));