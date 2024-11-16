/* Rock, Paper, Scissors

PLANNING

Input-
User chooses rock/paper/scissors
Computer randomly chooses rock/paper/scissors

Output1-
if userChoice rock and computerChoice scissors win
if userChoice paper and computerChoice rock win
if userChoice scissors and computerChoice paper win

if userChoice rock and computerChoice paper lose
if userChoice paper and computerChoice scissors lose
if userChoice scissors and computerChoice rock lose

if userChoice and computerChoice are equal it's a tie

Output2 Score
There are 5 games each with a result.
By the end, the userScore and the computerScore are compared and the highest one wins, 
the game ends

*/

//Global Declarations
let humanScore = 0;
let computerScore = 0;

function capitalize (string){
    let lowerCase = string.toLowerCase();
    let firstLetter = lowerCase.charAt(0).toUpperCase();
    let word = lowerCase.slice(1);
    return firstLetter + word;
}

//INPUTS

function getComputerChoice (){
    let cChoice = Math.floor(Math.random()*3) + 1;
    switch (cChoice){
        case 1: 
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
    return cChoice
}

function getHumanChoice (){
    let hChoice = window.prompt("Pick your poison.");
    return capitalize(hChoice)
}

//ROUND

function playRound (humanChoice, computerChoice){ 
    let a  = humanChoice;
    let b = computerChoice;

    if (((a === "Paper") && (b === "Rock")) || 
        ((a === "Rock") && (b === "Scissors")) ||
        ((a === "Scissors") && (b === "Paper"))){
            humanScore = humanScore + 1;
            console.log("You win! " + a + " beats " + b + ".");
        }
        else if (((a === "Rock") && (b === "Paper")) || 
            ((a === "Paper") && (b === "Scissors")) ||
            ((a === "Scissors") && (b === "Rock"))){
                computerScore = computerScore + 1;
                console.log("You lose! " + b + " beats " + a + ".")
                } else {
                    console.log("Uncomputable, try again.");
                }
    return humanScore + " - " + computerScore;
}


//GAME
function outcome () {
    if (humanScore > computerScore){
        return "You won the game!"
    } else if (humanScore === computerScore){
        return "I'ts a tie." 
    } else {
     return "You lost."}
}
function playGame () {
    console.log(playRound(getHumanChoice(),getComputerChoice()));
    console.log(playRound(getHumanChoice(),getComputerChoice()));
    console.log(playRound(getHumanChoice(),getComputerChoice()));
    console.log(playRound(getHumanChoice(),getComputerChoice()));
    console.log(playRound(getHumanChoice(),getComputerChoice()));
    return outcome();
    }

console.log(playGame());