let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let message = document.querySelector("#message");
let textElement = document.createElement("p");
let choices = ["./assets/rock.svg", "./assets/paper.svg", "./assets/scissors.svg"]

function chooseRandom() {
    return Math.floor(Math.random() * 3);
}

function determineWinner(index1, index2) {
    flag = false;
    textElement.classList.add("message-text");
    message.appendChild(textElement);

    if (index1 == index2) {
        textElement.innerHTML = "A Draw"
        textElement.style.color = "yellow";
    } else {
        if (index1 == 0) {
            if (index2 == 1) {
                flag = true;
            } else if (index2 == 2) {
                flag = false;
            }
        } else if (index1 == 1) {
            if (index2 == 0) {
                flag = false;
            } else if (index2 == 2) {
                flag = true;
            }
        } else {
            if (index2 == 0) {
                flag = true;
            } else if (index2 == 1) {
                flag = false;
            }
        }

        if (flag) {
            textElement.style.color = "green";
            textElement.textContent = "Player 2 wins";
            addSmilingFace(player2);
        } else {
            textElement.style.color = "green";
            textElement.textContent = "Player 1 wins";
            addSmilingFace(player1);
        }
    }
}

function addSmilingFace(player) {
    let smilingFace = document.createElement("img");
    smilingFace.classList.add("images");
    smilingFace.src = "./assets/win.png";
    player.appendChild(smilingFace);
}

let overallScore = 0;
let roundCounter = 0;

function startNewRound() {
    roundCounter++;
    let userMove = prompt(`Start ${roundCounter} Round!\nChoose your move: rock, paper, or scissors`).toLowerCase();
    let index1 = getMoveIndex(userMove);
    
    if (index1 === -1) {
        alert("Invalid move! Please choose rock, paper, or scissors.");
        return;
    }

    let index2 = chooseRandom();
    displayMoves(index1, index2);
    determineWinner(index1, index2);
}

function displayMoves(index1, index2) {
    clearPlayers();
    
    let choice1 = document.createElement("img");
    choice1.classList.add("images");
    choice1.src = choices[index1];
    player1.appendChild(choice1);

    let choice2 = document.createElement("img");
    choice2.classList.add("images");
    choice2.src = choices[index2];
    player2.appendChild(choice2);
}

function clearPlayers() {
    // Clear previous moves
    player1.innerHTML = "";
    player2.innerHTML = "";
}

function getMoveIndex(move) {
    return ["rock", "paper", "scissors"].indexOf(move);
}

document.getElementById("startRound").addEventListener('click', startNewRound);