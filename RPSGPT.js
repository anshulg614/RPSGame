const playerSelection = prompt("Enter your choice: Rock, Paper, Scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  console.log(getComputerChoice());

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
      return "You lose! " + computerSelection + " beats " + playerSelection;
    }
  }

  function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Enter your choice: Rock, Paper, Scissors").toLowerCase();
      let computerSelection = getComputerChoice().toLowerCase();
      let roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
      if (roundResult.includes("win")) {
        playerScore++;
      } else if (roundResult.includes("lose")) {
        computerScore++;
      }
    }
    if (playerScore > computerScore) {
      console.log("You won the game!");
    } else if (playerScore < computerScore) {
      console.log("You lost the game!");
    } else {
      console.log("It's a tie!");
    }
  }
  game();

  