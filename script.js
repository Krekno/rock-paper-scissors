/*
0: rock
1: paper
2: scissors
*/

function getComputerChoice() {
    Math.floor(Math.random(3));
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    for (let i = 0; i < playerChoice.length; i++) {
        playerChoice[i] = playerChoice[i].toLowerCase();
    }
    if (playerChoice == "rock") {
        return 0;
    } else if (playerChoice == "paper") {
        return 1;
    } else if (playerChoice == "scissors") {
        return 2;
    } else {
        return "Invalid input. Please try again.";
    }
}