
let playerScore = 0;
let computerScore = 0;
game();

//first to 3 points wins, there may be more than 5 games if ties occur
function game() {
  updateScore(playerScore, computerScore);
  let playerSelection;

  //DOM manipulation
  const rockBtn = document.querySelector("#rockBtn");
  rockBtn.addEventListener("click", () => playRound("rock"));

  const paperBtn = document.querySelector("#paperBtn");
  paperBtn.addEventListener("click", () => playRound("paper"));

  const scissorsBtn = document.querySelector("#scissorsBtn");
  scissorsBtn.addEventListener("click", () => playRound("scissors"));
}

//handles click event of buttons
function playRound(userSelection) {
  if (playerScore < 3 && computerScore < 3) {
    let computerSelection = getComputerChoice();
    let winner = determineWinner(userSelection, computerSelection);
    changeComputerIcon(computerSelection);
    updateScore(winner.who);
  }
}


//generates a random choice for the computer
function getComputerChoice() {
  const choiceArray = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[choice];
}


//Winner class
function Winner(who, message) {
  this.who = who;
  this.message = message;
}


//takes player and computer choice as input and declares the winner of the round
function determineWinner(playerSelection, computerSelection) {
  const winner = {};
  if (playerSelection === computerSelection) {
    winner.who = "tie";
    winner.message = `Tie between ${playerSelection}`;
  }
  else if ((playerSelection === "rock" || computerSelection === "rock") && (playerSelection === "scissors" || computerSelection === "scissors")) {
    winner.who = (playerSelection === "rock") ? "player" : "computer";
    winner.message = `${((winner.who === "player") ? "You Win!" : "You Lose!")} Rock beats scissors`;
  }
  else if ((playerSelection === "paper" || computerSelection === "paper") && (playerSelection === "scissors" || computerSelection === "scissors")) {
    winner.who = (playerSelection === "scissors") ? "player" : "computer";
    winner.message = `${((winner.who === "player") ? "You Win!" : "You Lose!")} Scissors beats paper`;
  }
  else if ((playerSelection === "rock" || computerSelection === "rock") && (playerSelection === "paper" || computerSelection === "paper")) {
    winner.who = (playerSelection === "paper") ? "player" : "computer";
    winner.message = `${((winner.who === "player") ? "You Win!" : "You Lose!")} Paper beats rock`;
  }
  return winner;
}


function changeComputerIcon(computerSelection) {
  const computerIcon = document.getElementById("computerIcon");

  switch (computerSelection) {
    case "rock":
      computerIcon.src = "./img/computerIcons/rock.png";
      break;
    case "paper":
      computerIcon.src = "./img/computerIcons/paper.png";
      break;
    case "scissors":
      computerIcon.src = "./img/computerIcons/scissors.png";
      break;
  }
}

function updateScore(winner) {
  const scoreBoard = document.getElementById("scoreBoard");
  if (winner === "player") {
    playerScore += 1;
  }
  if (winner === "computer") {
    computerScore += 1;
  }
  scoreBoard.textContent = `Player Score: ${playerScore}  |  Computer Score: ${computerScore}`;

}