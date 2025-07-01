// Create score and play again variables
let playAgain = "y";
let humanScore = 0;
let computerScore = 0;

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
  const userInput = prompt("Choose your character! (Scissors/Paper/Rock) : ");
  // Return curated user input
  return userInput.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a draw");
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("You lose!");
    computerScore++;
  } else {
    console.log("You win");
    humanScore++;
  }
}

function displayScore() {
  console.log("Current score:");
  console.log(`Computer: ${computerScore}`);
  console.log(`You: ${humanScore}`);
}

function playGame() {
  console.log("Time to play Rock Paper Scissors! Best of 5!");

  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
    displayScore();
  }

  if (humanScore < computerScore) {
    console.log("You lost the game! Better luck next time!");
  } else if (computerScore < humanScore) {
    console.log("You've won the game! Congrats!");
  } else {
    console.log("Looks like the whole game is a tie!");
  }
}

while (playAgain === "y") {
  playGame();

  playAgain = prompt('Enter "y" if you want to play again: ');
}
