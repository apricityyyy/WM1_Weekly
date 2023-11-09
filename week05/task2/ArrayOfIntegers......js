const numbers = [6, 7, 4, 3, 4, 4, 4, 5, 5];
let element;
let sum = 0;
let average;
let min = 1000000;
let max = -4;
let n = numbers.length;

for (element of numbers) {
    sum += element;
    
    if (element < min) {
        min = element;
    }

    if (element > max) {
        max = element;
    }
}

average = parseFloat(sum/numbers.length);

console.log("Sum: " + sum);
console.log("Average: " + average);
console.log("Minimum: " + min);
console.log("Maximum: " + max);

numbers.sort();

let min_count = n + 1, res = -1;
let curr_count = 1;

for (let i = 1; i < n; i++) {
    if (numbers[i] == numbers[i - 1]) curr_count++;
    else {
        if (curr_count < min_count) {
            min_count = curr_count;
            res = numbers[i - 1];
        }

        curr_count = 1;
    }
}


if (curr_count < min_count) {
    min_count = curr_count;
    res = numbers[n - 1];
}

console.log(res);