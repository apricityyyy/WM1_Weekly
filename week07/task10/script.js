function startGame() {
    const gameContainer = document.getElementById('game-container');
    const subResult = document.getElementById('sub-result');
    const result = document.getElementById('result');
    const continueBtn = document.getElementById('continue-btn');
    continueBtn.style.display = 'none';

    function playRound() {
        let randomDice1 = Math.floor(Math.random() * 6) + 1;
        let randomDice2 = Math.floor(Math.random() * 6) + 1;
        let comeOutRoll = randomDice1 + randomDice2;

        gameContainer.innerHTML = ''; // Clear previous round

        const table = document.createElement("table");
        table.classList.add("center");

        const header = table.insertRow();
        const header1 = header.insertCell();
        header1.innerHTML = "<b>Dice 1</b>";
        const header2 = header.insertCell();
        header2.innerHTML = "<b>Dice 2</b>";

        const row1 = table.insertRow();
        const dice1Cell = row1.insertCell();
        dice1Cell.textContent = randomDice1;
        const dice2Cell = row1.insertCell();
        dice2Cell.textContent = randomDice2;

        gameContainer.appendChild(table);

        if (comeOutRoll == 7 || comeOutRoll == 11) {
            printCongrats();
        } else if (comeOutRoll == 2 || comeOutRoll == 3 || comeOutRoll == 12) {
            printLost();
        } else {
            subResult.innerHTML = "Trying to find winner...";
            continueBtn.style.display = 'block';
            continueBtn.disabled = false;

            continueBtn.onclick = function () {
                playRound();
                continueBtn.style.display = 'none';
            };
        }
    }

    function printCongrats() {
        result.innerHTML = "You won! Congratulations :)";
        result.style.color = "green";
        continueBtn.style.display = 'block';
        continueBtn.disabled = true;
    }

    function printLost() {
        result.innerHTML = "You lost! See you next time...";
        result.style.color = "red";
        continueBtn.style.display = 'block';
        continueBtn.disabled = true;
    }

    playRound();
}

function continueGame() {
    startGame();
}