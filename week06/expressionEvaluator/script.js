let message = document.querySelector('h1');
const operatorMap = new Map();
let inputElement = document.getElementById('user_operation');

operatorMap.set('+', 'addition');
operatorMap.set('-', 'subtraction');
operatorMap.set('*', 'multiplication');
operatorMap.set('/', 'division');

function getOperations() {
    let tokens = inputElement.value.split(/\s*([+\-*/])\s*/);
    evaluate(tokens[1], parseInt(tokens[0]), parseInt(tokens[2]));
}

function evaluate(operator, operand1, operand2) {
    for (let [key, value] of operatorMap) {
        if (key == operator) {
            let operation = value;
            let result = 0;
            switch(operation){
                case 'subtraction':
                    result = operand1 - operand2;
                    break;
                case 'multiplication':
                    result = operand1 * operand2;
                    break;
                case 'division':
                    result = operand1 / operand2;
                    break;
                default:
                    result = operand1 + operand2;
            }

            message.innerHTML = `The result of ${operation}: ${result}.`
            break;
        }
    }
}


// Execute a function when the user presses a key on the keyboard
inputElement.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById('checkButton').click();
    }
});

document.getElementById('checkButton').addEventListener('click', getOperations);