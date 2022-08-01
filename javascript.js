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

//takes user input and returns formatted input if valid, else re-asks for input. 
function getPlayerChoice() {
    let validInput = false;
    while (!validInput) {
        let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            validInput = true;
            return choice;
        }
        else{
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

console.log(getComputerChoice());

