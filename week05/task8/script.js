let word = prompt("Please enter the word:")

function sliceWord(word) {
    let array = [];
    let leng = word.length;

    for (i = 0; i < leng; i++) {
        array += word.slice(0, i) + "_" + word.slice(i, leng);
        array += "\n";
    }

    return array;
}

alert(sliceWord(word));