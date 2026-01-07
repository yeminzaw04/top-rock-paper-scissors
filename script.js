// Return randomly one of three values: Rock, Paper, Scissors
// number => string
// 3 => 0(rock), 1(paper), 2(scissors)

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

let getHumanChoice = (e) => {
    return e.currentTarget.textContent;
};

let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let result = document.querySelector('.result');
    let resultDisplay = document.createElement("p");
    let gameLog = document.createElement('p');


    let playRound = (humanChoice, computerChoice) => {
        humanChoice = humanChoice.toLowerCase();

        resultDisplay.textContent = `You chose ${humanChoice} and computer chose ${computerChoice}`;
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

        resultDisplay.appendChild(gameLog);
    }

    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => button.addEventListener('click', e => {
    playRound(getHumanChoice(e), getComputerChoice());
    }));

    // Play the game 5 rounds
    // for (let i = 0; i < 5; i++) {
    //     playRound(getHumanChoice(), getComputerChoice());
    // }

    // if (humanScore < computerScore) {
    //     alert("You lost! Try again");
    // } else if (humanScore > computerScore) {
    //     alert("Congratulations! You won.");
    // } else {
    //     alert("What a coincidence! It's a tie.")
    // }
};

playGame();
