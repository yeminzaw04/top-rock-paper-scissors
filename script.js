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

let getHumanChoice = () => {
    return  prompt("rock, paper, or scissors?");
}


let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    let playRound = (humanChoice, computerChoice) => {
        humanChoice = humanChoice.toLowerCase();

        console.log(`You chose ${humanChoice} and computer chose ${computerChoice}`);

        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper covers rock.");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock crushes scissors.");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors cut paper.");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper covers rock.");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock crushes scissors.");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors cut paper.");
            humanScore++;
        } else {
            console.log("It's a tie!")
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore < computerScore) {
        alert("You lost! Try again");
    } else if (humanScore > computerScore) {
        alert("Congratulations! You won.");
    } else {
        alert("What a coincidence! It's a tie.")
    }
};

playGame();
