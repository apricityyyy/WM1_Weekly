let word = prompt("Please enter the string:")

function sortString(word) {
    return word.split("").sort().join("");
}

console.log(sortString(word));