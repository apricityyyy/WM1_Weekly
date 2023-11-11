let input = prompt("Please enter your name and username: ");

function proper(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function normalizeWord(word) {
    let pieces = [];
    let result = '';

    for (let i = 0, j = 0; i < word.length; i += 2, j++) {
        pieces[j] = word.slice(i, i + 2);
        pieces[j] = proper(pieces[j]);
    }

    for (element of pieces) {
        result += element;
    }

    return result;
}

function normalizeSentence(sentence) {
    let myArr = sentence.split(" ");

    let result = myArr.map(normalizeWord);

    return result.join(" ");
}

console.log(normalizeSentence("abcd efghijklm"))