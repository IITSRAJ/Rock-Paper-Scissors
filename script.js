// ----------------------------------------- All the Rock elements -------------------------------------

let playerRock = document.getElementById("playerRock");
let computerRock = document.getElementById("computerRock");
let rockBtn = document.getElementById("rockBtn");

// ----------------------------------------- All the Paper elements -----------------------------------------

let playerPaper = document.getElementById("playerPaper");
let computerPaper = document.getElementById("computerPaper");
let paperBtn = document.getElementById("paperBtn");

// ----------------------------------------- All the Scissors elements -----------------------------------------

let playerScissors = document.getElementById("playerScissors");
let computerScissors = document.getElementById("computerScissors");
let scissorsBtn = document.getElementById("scissorsBtn");

// ----------------------------------------------------- Score Element ---------------------------------------

let playerScoreElement = document.getElementById("playerScore");
let computerScoreElement = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;

// ---------------------------------- Player Choice & Computer Choice ------------------------------------------------

let playerChoice = "rock";
playerPaper.style.display = "none";
playerScissors.style.display = "none";

let computerSelection = document.querySelector(".computerSelection");
computerPaper.style.display = "none";
computerScissors.style.display = "none";
let computerCurrentChoice = "";

const computerChoice = () => {
  let choices = [computerRock, computerPaper, computerScissors];
  let choiceNames = ["rock", "paper", "scissors"];

  // Hide all previous choices
  choices.forEach((choice) => (choice.style.display = "none"));

  // Select a new choice randomly
  let randomIndex = Math.floor(Math.random() * choices.length);
  let compChoice = choices[randomIndex];

  // Show the new choice
  compChoice.style.display = "block";

  // Store the choice
  computerCurrentChoice = choiceNames[randomIndex];

  checkWinner();
};

const playerChooseRock = () => {
  playerChoice = "rock";
  playerRock.style.display = "block";
  playerPaper.style.display = "none";
  playerScissors.style.display = "none";
};
rockBtn.addEventListener("click", playerChooseRock);
rockBtn.addEventListener("click", computerChoice);

const playerChoosePaper = () => {
  playerChoice = "paper";
  playerPaper.style.display = "block";
  playerRock.style.display = "none";
  playerScissors.style.display = "none";
};
paperBtn.addEventListener("click", playerChoosePaper);
paperBtn.addEventListener("click", computerChoice);

const playerChooseScissors = () => {
  playerChoice = "scissors";
  playerScissors.style.display = "block";
  playerPaper.style.display = "none";
  playerRock.style.display = "none";
};
scissorsBtn.addEventListener("click", playerChooseScissors);
scissorsBtn.addEventListener("click", computerChoice);

// --------------------------------- Check Winner ----------------------------------------------

const checkWinner = () => {
  if (playerChoice === computerCurrentChoice) {
    // It's a draw — do nothing or show a message
    displayResult("Its a Draw!!");
  } else if (
    (playerChoice === "rock" && computerCurrentChoice === "scissors") ||
    (playerChoice === "paper" && computerCurrentChoice === "rock") ||
    (playerChoice === "scissors" && computerCurrentChoice === "paper")
  ) {
    // Player wins
    playerScore++;
    playerScoreElement.textContent = playerScore;
    displayResult("You win!");
  } else {
    // Computer wins
    computerScore++;
    computerScoreElement.textContent = computerScore;
    displayResult("Computer wins!");
  }
};

let result = document.getElementById("result");

const displayResult = (message) => {
  result.textContent = message;
};

// ---------------------------------- Restart Btn ------------------------------------

let restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  result.textContent = "";

  // Hide all choices
  playerRock.style.display = "block";
  playerPaper.style.display = "none";
  playerScissors.style.display = "none";
  computerRock.style.display = "block";
  computerPaper.style.display = "none";
  computerScissors.style.display = "none";
});
