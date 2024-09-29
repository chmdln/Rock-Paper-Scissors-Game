
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
// console.log(getHumanChoice()); 




// console.log(playRound()); 



function playGame() {

    let humanScore = 0; 
    let computerScore = 0; 

    function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
    
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore += 1
                return "You lose! Paper beats Rock."
            } else if (computerChoice === "rock") {
                return "It's a tie."
            } else {
                humanScore += 1
                return "You win! Rock beats Scissors."
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore += 1
                return "You win! Paper beats Rock."
            } else if (computerChoice === "paper") {
                return "It's a tie."
            } else {
                computerScore += 1 
                return "You lose! Scissors beats Paper."
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                computerScore += 1
                return "You lose! Rock beats Scissors."
            } else if (computerChoice === "paper") {
                humanScore += 1
                return "You win! Scissors beats Paper."
            } else if (computerChoice === "scissors") {
                return "It's a tie."
            }
        } 
    }

    for (let i=0; i<=4; i++) {
        playRound(); 
    }

    if (humanScore > computerScore) {
        return `You are the winner! Your score: ${humanScore}, computer score: ${computerScore}` 
    } else if (computerScore > humanScore) {
        return `You are the loser! Your score: ${humanScore}, computer score: ${computerScore}` 
    } 
    return `It's a tie! Your score: ${humanScore}, computer score: ${computerScore}` 
}

console.log(playGame()); 



