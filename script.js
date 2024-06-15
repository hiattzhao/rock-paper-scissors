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
function getHumanChoice() {
    return prompt('Type: "rock", "paper", or "scissors"');
}

// Play logic that compares the choices made by the computer and the human
function playRound(humanChoice, computerChoice) {
    // Make human's choice all lower case
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock" && computerChoice == 1) { // If player chooses rock and computer chooses rock
        console.log("It's a tie!");
    } else if (humanChoice == "rock" && computerChoice == 2) { // If player chooses rock and computer chooses paper
        console.log("Paper beats Rock. Computer wins!");
        computerScore++; // Increase score
    } else if (humanChoice == "rock" && computerChoice == 3) { // If player chooses rock and computer chooses scissors
        console.log("Rock beats Scissors. Player wins!");
        humanScore++; // Increase score
    } else if (humanChoice == "paper" && computerChoice == 1) { // If player chooses paper and computer chooses rock
        console.log("Paper beats Rock. Player wins!");
        humanScore++; // Increase score
    } else if (humanChoice == "paper" && computerChoice == 2) { // If player chooses paper and computer chooses paper
        console.log("It's a tie!");
    } else if (humanChoice == "paper" && computerChoice == 3) { // If player chooses paper and computer chooses scissors
        console.log("Scissors beats Paper. Computer wins!");
        computerScore++; // Increase score
    } else if (humanChoice == "scissors" && computerChoice == 1) { // If player chooses scissors and computer chooses rock
        console.log("Rock beats Scissors. Computer wins!");
        computerScore++; // Increase score
    } else if (humanChoice == "scissors" && computerChoice == 2) { // If player chooses scissors and computer chooses paper
        console.log("Scissors beats Paper. Player wins!");
        humanScore++; // Increase score
    } else if (humanChoice == "scissors" && computerChoice == 3) { // If player chooses scissors and computer chooses scissors
        console.log("It's a tie!");
    }
}

// Keeping scores
let humanScore;
let computerScore;

// Play game
function playGame() {
    humanScore = 0;
    computerScore = 0;

    // Play 5 rounds
    for (let index = 0; index < 5; index++) {
        // Remember the computer's choice and the human's choice
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Human Score: ${humanScore}. Computer Score: ${computerScore}`)
}

playGame();

