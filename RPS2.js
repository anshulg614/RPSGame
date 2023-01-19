function openg() {
    var startButton = document.getElementById("show-buttons");
    var actualButtons = document.getElementById("buttons1");
    var userScore = document.getElementById("user");
    var CPUScore = document.getElementById("CPU");
    var data = document.getElementById("dataBox");
    startButton.style.display = "none";
    actualButtons.style.display = "block";
    userScore.textContent = "User: " + user;
    CPUScore.textContent = "CPU: " + CPU;
    data.textContent = "Welcome, click any of the three buttons and begin!"
}

function rock() { game("rock"); }
function paper() { game("paper"); }
function scissor() { game("scissors"); }

var CPU = 0, user = 0;

function game(text) {
    const options = ['rock', 'paper', 'scissors'];
    const rand = Math.floor(Math.random() * 3);
    const comp = options[rand];
    const playerChoice = text;
    var templet = document.getElementById("dataBox");
    var userScore = document.getElementById("user");
    var CPUScore = document.getElementById("CPU");

    if (playerChoice !== 'scissors' && playerChoice !== 'paper' && playerChoice !== 'rock') {
        templet.textContent = "You didn't put the words scissors, paper, or rock. Please re-enter one of those three words upper or lower case.";
    } else {
        if (playerChoice === comp) {
            templet.innerHTML = "It's a Tie!<br>You put " + playerChoice + " and the computer put " + comp + ".";
        } else if (
            (playerChoice === 'rock' && comp === 'scissors') ||
            (playerChoice === 'paper' && comp === 'rock') ||
            (playerChoice === 'scissors' && comp === 'paper')
        ) {
            user += 1;
            userScore.textContent = "User: " + user;
            templet.innerHTML = "You won the round!<br>You put " + playerChoice + " and the computer put " + comp + ".";
        } else {
            CPU += 1;
            console.log("User: " + CPU);
            CPUScore.textContent = "CPU: " + CPU;
            templet.innerHTML = "You lost the round<br>You put " + playerChoice + " and the computer put " + comp + ".";
        }
        if (user === 5 || CPU === 5) {
            if (user === 5) {
                templet.innerHTML += "<br>You won the game!"
            } else {
                templet.innerHTML += "<br>You lost the game. Try again!"
            }
            user = 0;
            CPU = 0;
            var startButton = document.getElementById("show-buttons");
            var actualButtons = document.getElementById("buttons1");
            startButton.style.display = "block";
            startButton.textContent = "Play Again!"
            actualButtons.style.display = "none";
        }
    }
}
