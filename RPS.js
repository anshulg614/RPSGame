function computerRandom() {
    const options = ['rock', 'paper', 'scissors'];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
}

function runRound() {
    const playerChoice = prompt("Enter your choice: Rock, Paper, Scissors").toLowerCase();
    if (playerChoice !== 'scissors' && playerChoice !== 'paper' && playerChoice !== 'rock') {
        console.log("You didn't put the words scissors, paper, or rock. Please re-enter one of those three words upper or lower case.");
    } else {
        const comp = computerRandom();
        console.log("You put " + playerChoice + " and the computer put " + comp + ".");
        if (playerChoice === comp) {
            console.log("Its a tie");
            return 'tie';
        }
        else if ((playerChoice === 'rock' && comp === 'scissors') ||
            (playerChoice === 'paper' && comp === 'rock') ||
            (playerChoice === 'scissors' && comp === 'paper')
        ) {
            console.log("You win");
            return 'win';
        }
        else {
            console.log("You lost")
            return 'loss';
        }
    }
}

function games() {
    let user = 0, vm = 0;
    let b = true;
    console.log("Welcome, whoever is the first to three wins!");
    while (b) {
        let temp = runRound();
        if (temp === 'loss') {
            vm++;
        } else if (temp == 'win') {
            user++;
        }
        if (vm >= 3 || user >= 3) {
            b = false;
        }
    }
    if (user > vm) {
        console.log("You won the game");
    }
    else {
        console.log("You lost the game, unfortunate. Reload to play again!");
    }

}
window.onload = function () {
    var showButtons = document.getElementById("show-buttons");
    var hiddenButtons = document.getElementById("buttons1");
    var rpgButtons = document.getElementById("buttons");

    hiddenButtons.style.display = "none";

    showButtons.addEventListener("click", function () {
        if (hiddenButtons.style.display === "none") {
            hiddenButtons.style.display = "block";
            showButtons.style.display = "none";
        } else {
            hiddenButtons.style.display = "none";
        }
    });

    rpgButtons.addEventListener("click", function(){

    });
}
