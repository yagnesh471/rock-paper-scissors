const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const playerDisplay = document.querySelector("#player-display span");
const computerDisplay = document.querySelector("#computer-display span");
const resultMessage = document.getElementById("result-message");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const buttons = document.querySelectorAll(".choice-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    playRound(playerChoice);
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  playerDisplay.textContent = playerChoice;
  computerDisplay.textContent = computerChoice;

  if (playerChoice === computerChoice) {
    resultMessage.textContent = "It's a tie!";
    resultMessage.style.color = "#555";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    resultMessage.textContent = "You win this round!";
    resultMessage.style.color = "#2e7d32";
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    resultMessage.textContent = "Computer wins this round!";
    resultMessage.style.color = "#c62828";
  }
}