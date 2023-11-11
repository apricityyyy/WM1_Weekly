let list = document.querySelector('ul');
let elements = list.querySelectorAll('li');
let wordArray = [];
let message = document.querySelector('h1');

for (element of elements) {
    let word = element.textContent;
    wordArray.push(word);
}

function getUserInput() {
    let inputElement = document.getElementById('user_word');
    return inputElement.value;
}

let attemptsLeft = 5;

function checkGuess() {
    let userInput = getUserInput();
    let isCorrect = wordArray.includes(userInput);
    console.log(wordArray);

    if (isCorrect) {
        message.innerHTML = 'You guess was correct! You won!';
    } else {
        attemptsLeft--;

        if (attemptsLeft > 0) {
            message.innerHTML = `Incorrect guess. ${attemptsLeft} attempts left. Try again.`;
        } else {
            message.innerHTML = 'You have run out of attempts. Game over.';
        }
    }
}

document.getElementById('checkButton').addEventListener('click', checkGuess);