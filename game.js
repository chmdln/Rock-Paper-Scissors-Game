let humanScore = 0; 
let computerScore = 0; 

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3); 
    if (randomNumber === 0) {
        return "rock" 
    } else if (randomNumber === 1) {
        return "paper"
    } else if (randomNumber === 2) {
        return "scissors"
    }
}

// console.log(getComputerChoice()); 

function getHumanChoice() {
    let humanChoice = prompt("Please, select your choice"); 
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === "rock") {
        return "rock"
    } else if (humanChoice === "paper") {
        return "paper"
    } else if (humanChoice == "scissors") {
        return "scissors"
    } else {
        return "Please, select one of the 3 choices: 'rock', 'paper', 'scissors'"
    }
}

console.log(getHumanChoice()); 