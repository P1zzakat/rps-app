function getComputerChoice() {
   const randomNumber = Math.floor(Math.random()*3); // Get an random value between 0, 1, 2
   if (randomNumber === 0) {
    return "Rock";
   } else if (randomNumber === 1) {
    return "Paper";
   } else {
    return "Scissors";
   }
}