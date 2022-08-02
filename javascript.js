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

//takes player and computer choice as input and declares the winner of the round
function playRound(playerSelection, computerSelection) {
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

    let winner;
    if (playerSelection === computerSelection){
        winner = "tie";
    }
    else if ((playerSelection === "rock" || computerSelection === "rock") && (playerSelection === "scissors" || computerSelection === "scissors")) {
        winner = (playerSelection === "rock") ? "player" : "computer";
    }
    else if ((playerSelection === "paper" || computerSelection === "paper") && (playerSelection === "scissors" || computerSelection === "scissors")){
        winner = (playerSelection === "scissors") ? "player" : "computer";
    }
    else if ((playerSelection === "rock" || computerSelection === "rock") && (playerSelection === "paper" || computerSelection === "paper")){
        winner = (playerSelection === "paper") ? "player" : "computer";
    }
    return winner;
}