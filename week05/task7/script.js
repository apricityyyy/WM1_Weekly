let word1 = prompt("Please enter the string:")
let word2 = prompt("Please enter the other string:")

function sortString(word) {
    return word.split("").sort().join("");
}

if (sortString(word1) == sortString(word2)) {
    alert("Words are anagrams.")
} else {
    alert("Given words are not anagrams.")
}