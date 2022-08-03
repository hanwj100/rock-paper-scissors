/*
Prompt the user to pick rock, papers or scissors and store the selection.

Generate a random choice for the computer and store its "selection" as well.

Compare the userSelection and computerSelection to determine the winner.

Display the result of the round to the user via console.

Add 1 to the winner's total score.

Replay the game until 5 games total are played.

Compare the userScore and computerScore to determine the winner.

Display the result of the game to the user via console.
*/

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
  let choiceArray = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[choice];
}


function Winner(who, message) {
  this.who = who;
  this.message = message;
}


//takes player and computer choice as input and declares the winner of the round
function determineWinner(playerSelection, computerSelection) {
  //same vs same = tie
  //rock vs scissor = rock
  //scissor vs paper = scissor
  //paper vs rock = paper

  //if the two selections are equal to each other
  //tie

  //if either selection is rock and either selection is scissor
  //winner is rock

  //if either selection is scissor and either selection is paper
  //winner is scissor

  //if either selection is paper and either selection is rock
  //winner is paper

  const winner = new Winner();
  if (playerSelection === computerSelection) {
    winner.who = "tie";
    winner.message = `Tie between ${playerSelection}`;
  }
  else if ((playerSelection === "rock" || computerSelection === "rock") && (playerSelection === "scissors" || computerSelection === "scissors")) {
    winner.who = (playerSelection === "rock") ? "player" : "computer";
    winner.message = `${((winner.who === "player") ? "You Win!" : "You Lose!")} Rock beats scissors`
  }
  else if ((playerSelection === "paper" || computerSelection === "paper") && (playerSelection === "scissors" || computerSelection === "scissors")) {
    winner.who = (playerSelection === "scissors") ? "player" : "computer";
    winner.message = `${((winner.who === "player") ? "You Win!" : "You Lose!")} Scissors beats paper`
  }
  else if ((playerSelection === "rock" || computerSelection === "rock") && (playerSelection === "paper" || computerSelection === "paper")) {
    winner.who = (playerSelection === "paper") ? "player" : "computer";
    winner.message = `${((winner.who === "player") ? "You Win!" : "You Lose!")} Paper beats rock`
  }
  return winner;
}

//best out of 5 games, which means that the first to 3 points wins
//it does not necessarily mean that there will be 5 games played total, there may be more if ties occur

//take the choice of each player and determine a winner
//print the winner message to the screen
//add one point to the winner's score
//play again if tied
//stop after 5 points have been distributed
function game() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 3 && computerScore < 3) {
    let roundWinner = determineWinner(getPlayerChoice(), getComputerChoice());
    console.log(roundWinner.message);
    if (roundWinner.who === "player") {
      playerScore += 1;
      console.log(`Player Score: ${playerScore}  |  Computer Score: ${computerScore}`)
    }
    else if (roundWinner.who === "computer") {
      computerScore += 1;
      console.log(`Player Score: ${playerScore}  |  Computer Score: ${computerScore}`)
    }
    else { //tied
      console.log("Play Again!")
    }
  }
}
game();