// Create button and element references for later use
const startButton = document.querySelector('.button-start');
const restartButton = document.querySelector('.button-restart');
const score = document.querySelector('.container__status p');
// Create score and play again variables
let playAgain = "y";
let humanScore = 0;
let computerScore = 0;
let validChoice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    // Get a random value between 0, 1, 2
    const randomNumber = Math.floor(Math.random() * 3);
    // Assign and return computer choice
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    // Get input from user
    let userInput;

    while (!validChoice.includes(userInput)) {
        userInput = prompt('Choose your character');
    }
    // Return curated user input
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("It's a draw");
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        alert("You lost this round");
        computerScore++;
    } else {
        alert("You won this round");
        humanScore++;
    }
}

function displayScore() {
    console.log('what the fuc');
    score.innerText = `You: ${humanScore}, Computer: ${computerScore}`;
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        displayScore();
    }

    if (humanScore < computerScore) {
        alert("You lost the game! Better luck next time!");
    } else if (computerScore < humanScore) {
        alert("You've won the game! Congrats!");
    } else {
        alert("Looks like the whole game is a tie!");
    }
}

displayScore();
startButton.addEventListener('click', playGame);

