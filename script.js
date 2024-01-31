/*
0: rock
1: paper
2: scissors
*/

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();
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

function playRound() {
    let arr = ["Rock", "Paper", "Scissors"];
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    console.log(computerChoice);
    console.log(playerChoice);
    if (playerChoice == computerChoice) {
        return "It's a tie!";
    } else if (playerChoice > computerChoice) {
        return "You win!" + arr[playerChoice] + " beats " + arr[computerChoice];
    } else if (playerChoice < computerChoice) {
        return "You lose!" + arr[computerChoice] + " beats " + arr[playerChoice];
    } else {
        return "Invalid input. Please try again.";
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        } else if (result.includes("tie")) {
            playerScore+=0.5;
            computerScore+=0.5;
        } else {
            console.log("invalid input, please try again");
            i--;
        }
        console.log(result);
    }
    if (playerScore > computerScore) {
        return "You won the game!" + playerScore + " to " + computerScore;
    } else if (playerScore < computerScore) {
        return "You lost the game!" + computerScore + " to " + playerScore;
    } else {
        return "It's a tie!";
    }
}
