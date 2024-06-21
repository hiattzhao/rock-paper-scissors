// Randomly generate rock, paper, scissors for a computer opponent
// Let player choose between rock, paper, or scissors
// Compare player's choice to computer's

// If player chooses rock and computer chooses rock, then print result
// If player chooses rock and computer chooses paper, then print result
// If player chooses rock and computer chooses scissors, then print result

// If player chooses paper and computer chooses rock, then print result
// If player chooses paper and computer chooses paper, then print result
// If player chooses paper and computer chooses scissors, then print result

// If player chooses scissors and computer chooses rock, then print result
// If player chooses scissors and computer chooses paper, then print result
// If player chooses scissors and computer chooses scissors, then print result


// 1 = rock
// 2 = paper
// 3 = scissors

// Let computer randomly returns 1, 2, or 3
function getComputerChoice() {
    return Math.floor(Math.random()*3)+1;
}

// Get human choice
// function getHumanChoice() {
//     return prompt('Type: "rock", "paper", or "scissors"');
// }

let humanChoice;

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        humanChoice = btn.textContent;
        playGame();
    });
});

// Keeping scores
let humanScore = 0;
let computerScore = 0;

let roundResult;

// Play logic that compares the choices made by the computer and the human
function playRound(humanChoice, computerChoice) {
    // Make human's choice all lower case
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock" && computerChoice == 1) { // If player chooses rock and computer chooses rock
        roundResult = "It's a tie!";
    } else if (humanChoice == "rock" && computerChoice == 2) { // If player chooses rock and computer chooses paper
        roundResult = "Paper beats Rock. Computer wins!";
        computerScore++; // Increase score
    } else if (humanChoice == "rock" && computerChoice == 3) { // If player chooses rock and computer chooses scissors
        roundResult = "Rock beats Scissors. Player wins!";
        humanScore++; // Increase score
    } else if (humanChoice == "paper" && computerChoice == 1) { // If player chooses paper and computer chooses rock
        roundResult = "Paper beats Rock. Player wins!";
        humanScore++; // Increase score
    } else if (humanChoice == "paper" && computerChoice == 2) { // If player chooses paper and computer chooses paper
        roundResult = "It's a tie!";
    } else if (humanChoice == "paper" && computerChoice == 3) { // If player chooses paper and computer chooses scissors
        roundResult = "Scissors beats Paper. Computer wins!";
        computerScore++; // Increase score
    } else if (humanChoice == "scissors" && computerChoice == 1) { // If player chooses scissors and computer chooses rock
        roundResult = "Rock beats Scissors. Computer wins!";
        computerScore++; // Increase score
    } else if (humanChoice == "scissors" && computerChoice == 2) { // If player chooses scissors and computer chooses paper
        roundResult = "Scissors beats Paper. Player wins!";
        humanScore++; // Increase score
    } else if (humanChoice == "scissors" && computerChoice == 3) { // If player chooses scissors and computer chooses scissors
        roundResult = "It's a tie!";
    }
}

// Play game
function playGame() {

    let computerSelection = getComputerChoice();
    let humanSelection = humanChoice;
    playRound(humanSelection, computerSelection);

    const result = document.querySelector("#result");
    const score = document.querySelector("#score");

    result.textContent = roundResult;
    score.textContent = `Human Score: ${humanScore}. Computer Score: ${computerScore}`;

    if (humanScore >= 5) {
        result.textContent = "Human Won.";
        score.textContent = "Game Over!";
    } else if (computerScore >= 5) {
        result.textContent = "Computer Won.";
        score.textContent = "Game Over!";
    }
}