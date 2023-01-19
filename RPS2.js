function openg() {
    var startButton = document.getElementById("show-buttons");
    var actualButtons = document.getElementById("buttons1");
    startButton.style.display = "none";
    actualButtons.style.display = "block";
}

function rock() { game("rock"); }
function paper() { game("paper"); }
function scissor() { game("scissors"); }

function game(text) {
    const options = ['rock', 'paper', 'scissors'];
    const rand = Math.floor(Math.random() * 3);
    const comp = options[rand];
    const playerChoice = text;
    var templet = document.getElementById("dataBox");

    if (playerChoice !== 'scissors' && playerChoice !== 'paper' && playerChoice !== 'rock') {
        templet.textContent = "You didn't put the words scissors, paper, or rock. Please re-enter one of those three words upper or lower case.";
    } else {
        if (playerChoice === comp) {
            templet.innerHTML = "You put " + playerChoice + " and the computer put " + comp + ".<br>Tie";
        } else if (
            (playerChoice === 'rock' && comp === 'scissors') ||
            (playerChoice === 'paper' && comp === 'rock') ||
            (playerChoice === 'scissors' && comp === 'paper')
        ) {
            templet.innerHTML = "You put " + playerChoice + " and the computer put " + comp + ".<br>Win";
        } else {
            templet.innerHTML = "You put " + playerChoice + " and the computer put " + comp + ".<br>Lose";
        }
    }
}
