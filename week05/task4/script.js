let array = [];
let N = prompt("Please enter the amount of elements:")

for (let i = 0; i < N; i++) {
    array[i] = 1;
}

for (let i = 2; i < N; i++) {
    number = array[i];

    for (let j = i ; j < N; j++) {
        if (j * i < N) {
            array[j * i] = 0;
        }
    }
}

console.log(array);