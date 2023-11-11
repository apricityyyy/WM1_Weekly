function findFibonacciSequence(index1, index2) {
    const fibArray = [];
    fibArray[0] = 0;
    fibArray[1] = 1;
    i = 2;

    while(i <= index2) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
        i++;
    }

    return fibArray.slice(index1, index2 + 1);
}

console.log(findFibonacciSequence(3, 6));