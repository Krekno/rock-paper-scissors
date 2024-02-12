/*
0: rock
1: paper
2: scissors
*/

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userScore = document.getElementById('score');

let userScoreCount = 0;
let computerScoreCount = 0;

rock.addEventListener('click', () => {
    playGame(0);
    });

paper.addEventListener('click', () => {
    playGame(1);
    });

scissors.addEventListener('click', () => {
    playGame(2);
    });

function playGame(userChoice) {
    let computerChoice = Math.floor(Math.random() * 3);
    if (userChoice === computerChoice) {
        console.log('Draw');
    } else if (userChoice === 0 && computerChoice === 2 || userChoice === 1 && computerChoice === 0 || userChoice === 2 && computerChoice === 1) {
        console.log('You win');
        userScoreCount++;
        userScore.innerHTML = userScoreCount + ' - ' + computerScoreCount;
    } else {
        console.log('You lose');
        computerScoreCount++;
    }
}