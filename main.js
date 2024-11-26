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
let finalResult = document.querySelector("#finalResult");
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


//ROUND

function playRound (humanChoice, computerChoice){ 
    let a  = humanChoice;
    let b = computerChoice;
    let roundResult = document.querySelector("#roundResult");
    let score = document.querySelector("#score");

    if (((a === "Paper") && (b === "Rock")) || 
        ((a === "Rock") && (b === "Scissors")) ||
        ((a === "Scissors") && (b === "Paper"))){
            humanScore = humanScore + 1;
            roundResult.innerText = "You win! " + a + " beats " + b + "."
        }
        else if (((a === "Rock") && (b === "Paper")) || 
            ((a === "Paper") && (b === "Scissors")) ||
            ((a === "Scissors") && (b === "Rock"))){
                computerScore = computerScore + 1;
                roundResult.innerText = "You lose! " + b + " beats " + a + ".";
                } else {
                    roundResult.innerText = "Tie, try again.";
                }
    score.innerText = humanScore + " - " + computerScore;
    let round = 0;
    return outcome();
}


//GAME
function outcome () {
        if (humanScore === 5){
            finalResult.innerText = "You won the game!";
        } else if (computerScore === 5){
            finalResult.innerText = "You lost."
        } 
}



//BUTTONS
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () =>{
    playRound(btnRock.value, getComputerChoice())}
);
btnPaper.addEventListener("click", () =>{
    playRound(btnPaper.value, getComputerChoice())}
);
btnScissors.addEventListener("click", () =>{
    playRound(btnScissors.value, getComputerChoice())}
);

//