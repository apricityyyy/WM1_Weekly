let a = parseInt(prompt("Please enter the first number:"));
let b = parseInt(prompt("Please enter the second number:"));
let n = parseInt(prompt("Please enter the amount of numbers:"));
let listElement = document.querySelector('ul');

function generateRandomNumbers(a, b, n) {
    let result = [];

    for (i = 0; i < n; i++) {
        result.push(Math.floor(Math.random() * (b - a + 1)) + a);
    }

    return result;
}

let randomArray = generateRandomNumbers(a, b, n);

function count(arr) {
    let result = {};

    for (element of arr) {
        result[element] = result[element] ? result[element] + 1 : 1;
    }

    return result;
}

frequency = count(randomArray);

for (key in frequency) {
    let element = document.createElement('li');
    element.innerHTML = key + " i  repeated " + frequency[key] + " times";
    listElement.appendChild(element);
}