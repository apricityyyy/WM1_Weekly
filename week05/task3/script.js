let N = prompt("Speficy the number of rounds.");

function playRound(table, dice1Cell, dice2Cell, subResult, result) {
    let randomDice1 = Math.floor(Math.random() * 7) + 1;
    let randomDice2 = Math.floor(Math.random() * 7) + 1;
    let comeOutRoll = randomDice1 + randomDice2;
    let flag = false;

    dice1Cell.textContent = randomDice1;
    dice2Cell.textContent = randomDice2;

    if (comeOutRoll == 7 || comeOutRoll == 11) {
        flag = true;
    } else if (comeOutRoll == 2 || comeOutRoll == 3 || comeOutRoll == 12) {
        flag = false;
    } else {
        const row2 = table.insertRow();
        const dice3Cell = row2.insertCell();
        const dice4Cell = row2.insertCell();

        point = comeOutRoll;
        subResult.innerHTML = "Trying to find winner...";

        while (true) {
            randomDice1 = Math.floor(Math.random() * 7) + 1;
            randomDice2 = Math.floor(Math.random() * 7) + 1;
            comeOutRoll = randomDice1 + randomDice2;

            dice3Cell.textContent = randomDice1;
            dice4Cell.textContent = randomDice2;

            if (comeOutRoll == point) {
                flag = true;
                break;
            }

            if (comeOutRoll == 7) break;
        }
    }

    if (flag) {
        printCongrats(result);
    } else {
        printLost(result);
    }
}

function playGame(N) {
    for (i = 0; i < N; i++) {
        console.log("I am inside for loop.")
        const table = document.createElement("table");
        table.classList.add("center");

        const header = table.insertRow();
        const header1 = header.insertCell();
        header1.innerHTML = "<b>Dice 1</b>";
        const header2 = header.insertCell();
        header2.innerHTML = "<b>Dice 2</b>";
        
        const row1 = table.insertRow();
        const dice1Cell = row1.insertCell();
        const dice2Cell = row1.insertCell();
        
        const subResult = document.createElement("h1");
        subResult.id = "sub_result";

        const result = document.createElement("h1");
        result.id = "result";

        playRound(table, dice1Cell, dice2Cell, subResult, result);

        // Append the table to the body
        document.body.appendChild(table);
        document.body.appendChild(subResult);
        document.body.appendChild(result); 
    }
}

function printCongrats(result) {
    result.innerHTML = "You won! Congratulations :)";
    result.style.color = "green";
}

function printLost(result) {
    result.innerHTML = "You lost! See you next time...";
    result.style.color = "red";
}

playGame(N);