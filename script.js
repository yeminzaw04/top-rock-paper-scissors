// Generate a random number to get a computer choice
let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

// Get user input human choice by retrieving the text of the button
let getHumanChoice = (e) => {
    return e.currentTarget.textContent;
};

// Game Program
let playGame = () => {
    // Set initial scores
    let humanScore = 0;
    let computerScore = 0;

    // Target elements
    let result = document.querySelector('.result');
    let buttons = document.querySelectorAll('.btn');

    // Create necessary elements before adding to the DOM
    let resultDisplay = document.createElement("p");
    let gameLog = document.createElement('p');
    let displayScores = document.createElement('p');
    let finalAnnouncement = document.createElement('p');
    let startOver = document.createElement('button');
    startOver.classList.add('btn');
    startOver.textContent = "Start Over";

    // Check who first get 5 scores
    let scoreCheck = () => {
        // Needed only when there is no reset button to reset the announcement from the previous round
        // finalAnnouncement.textContent = "";
        switch (5) {
            case humanScore:
                finalAnnouncement.textContent = "Yay, you win!"
                buttons.forEach(button => button.disabled = true);
                result.appendChild(finalAnnouncement);
                result.appendChild(startOver);
                break;
            case computerScore:
                finalAnnouncement.textContent = "Ah oh, you lost!"
                buttons.forEach(button => button.disabled = true);
                result.appendChild(finalAnnouncement);
                result.appendChild(startOver);
        }
    }

    // Main game logic
    let playRound = (humanChoice, computerChoice) => {
        humanChoice = humanChoice.toLowerCase();

        resultDisplay.textContent = `You chose ${humanChoice} and computer chose ${computerChoice}.`;
        result.appendChild(resultDisplay);

        if (humanChoice === "rock" && computerChoice === "paper") {
            gameLog.textContent = "You lose! Paper covers rock."
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            gameLog.textContent = "You win! Rock crushes scissors."
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            gameLog.textContent = "You lose! Scissors cut paper."
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            gameLog.textContent = "You win! Paper covers rock."
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            gameLog.textContent = "You lose! Rock crushes scissors."
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            gameLog.textContent = "You win! Scissors cut paper."
            humanScore++;
        } else {
            gameLog.textContent = "It's a tie!"
        }

        result.appendChild(gameLog);
    }

    // Reset DOM when start over button is clicked
    startOver.addEventListener('click', e => {
        while (result.lastChild) {
            result.removeChild(result.lastChild);
        }
        buttons.forEach(button => button.disabled = false);
        humanScore = 0;
        computerScore = 0;
    });

    // User choice buttons: when clicked, run game logic, display scores, and check final scores
    buttons.forEach(button => button.addEventListener('click', e => {
    playRound(getHumanChoice(e), getComputerChoice());
    displayScores.textContent = `Your score is ${humanScore} and computer score is ${computerScore}.`
    result.appendChild(displayScores);
    scoreCheck();
    }));
};

// Run the game
playGame();
