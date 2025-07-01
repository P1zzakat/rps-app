// Create score variables
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
    computerChoice++;
  } else {
    console.log("You win");
    humanChoice++;
  }
}

