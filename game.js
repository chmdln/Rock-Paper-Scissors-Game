let humanScore = 0; 
let computerScore = 0; 
let numberRounds = 0; 

let roundElem = document.querySelector('.round-number'); 
let playerScoreElem = document.querySelector('.player-score'); 
let computerScoreElem = document.querySelector('.computer-score');
let resultElem = document.querySelector('.result-container');


function play() {
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
    
    
    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
    
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore += 1
            } else if (computerChoice === "scissors") {
                humanScore += 1
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore += 1
            } else if (computerChoice === "scissors"){
                computerScore += 1 
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                computerScore += 1
            } else if (computerChoice === "paper") {
                humanScore += 1
            } 
        }
    
        numberRounds += 1;
        if (numberRounds === 10) {
            if (humanScore > computerScore) {
                resultElem.innerHTML = "&#x1F600 You won! &#x1F600"; 
            } else if (humanScore < computerScore) {
                resultElem.innerHTML = "&#x1F641 You lost. &#x1F641";
            } else {
                resultElem.innerHTML = "&#x1F60E It's a tie. &#x1F60E"; 
            }
        }; 
    }
    
    
    document.querySelectorAll('.js-choice-button').forEach((button) => {
        button.addEventListener('click', () => {
            
            if (numberRounds === 10) {
                return 
            }
            let humanChoice = button.id; 
            playRound(humanChoice);
    
            roundElem.innerText = `Round: ${numberRounds}/10`; 
            playerScoreElem.innerText = `Your score: ${humanScore}`; 
            computerScoreElem.innerText = `Computer score: ${computerScore}`;        
        }); 
    }); 
    
    
    document.querySelector('.reset-button').addEventListener('click', (button) => {
        humanScore = 0; 
        computerScore = 0; 
        numberRounds = 0; 
    
        roundElem.innerText = "Round: 0/10"
        playerScoreElem.innerText = "Your score: 0";  
        computerScoreElem.innerHTML = "Computer score: 0"; 
        resultElem.innerHTML = ""; 
    }); 
}; 

play(); 






 













