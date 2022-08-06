
//first to 3 points wins, there may be more than 5 games if ties occur
function game() {
  let playerScore = 0;
  let computerScore = 0;

  while(1) {
    let roundWinner = determineWinner(getPlayerChoice(), getComputerChoice());
    console.log(roundWinner.message);
    if (roundWinner.who === "player") {
      playerScore += 1;
      console.log(`Player Score: ${playerScore}  |  Computer Score: ${computerScore}`);
    }
    else if (roundWinner.who === "computer") {
      computerScore += 1;
      console.log(`Player Score: ${playerScore}  |  Computer Score: ${computerScore}`);
    }
    else { //tied
      console.log("Play Again!");
    }
  }
}

//takes user input and returns formatted input if valid, else re-asks for input 
function getPlayerChoice() {
  let validInput = false;
  while (!validInput) {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      validInput = true;
      return choice;
    }
    else {
      alert("Please make a valid choice.");
    }
  }
}

//generates a random choice for the computer
function getComputerChoice() {
  const choiceArray = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[choice];
}


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

const computerIcon = document.getElementById("computerIcon");

function buttonClicked (userSelection){
  console.log(determineWinner(userSelection, getComputerChoice()));
  computerIcon.src="./img/computerIcons/rock.png";
  computerIcon.id = ("computerIcon");
}

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => buttonClicked("rock"));

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => buttonClicked("paper"));

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => buttonClicked("scissors"));