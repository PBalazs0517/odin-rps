//html elements
let popup = document.getElementById("popup");
let p = document.getElementById("result");
let outcome = document.querySelector(".outcome");
let playerScoreDisplay = document.querySelector(".playerScoreDisplay");
let computerScoreDisplay = document.querySelector(".computerScoreDisplay");
let reset = document.getElementById("button");


// values
let playerSelect = 0;
let computerSelect = 0;
let playerScore = 0;
let computerScore = 0;

//plays a round
let buttons = document.querySelectorAll(".eventListener");
buttons.forEach(button => button.addEventListener("click", (e) => {
    playerSelect = e.target.id;
    document.getElementById("playerPick").src = `./img/${playerSelect}-svgrepo-com.svg`;
    computerPlay();
    document.getElementById("computerPick").src = `./img/${computerSelect}-svgrepo-com.svg`;
    console.log(`./img/${computerSelect}-svgrepo-com.svg`)
    comparePlayerAndComputer();
    scoreDisplay();
    endTheGame();
    return playerSelect;
}))

//sets the computers selection
function computerPlay() {
    let randomNum = Math.floor(Math.random()*3) + 1;
    if ( randomNum == 1) {
        computerSelect = "rock";
    } else if ( randomNum == 2) {
        computerSelect = "paper";
    } else {
        computerSelect = "scissors";
    }
    return computerSelect;
}

// plays round based of the two inputs
function comparePlayerAndComputer() {
    if ( playerSelect == computerSelect) {
        outcome.textContent = "Draw: " +  playerSelect + " is equal to " + computerSelect + ".";
        console.log("Draw: " +  playerSelect + " is equal to " + computerSelect + ".");
    } else if ( playerSelect == "paper" && computerSelect == "scissors") {
        outcome.textContent = `Lost, ${computerSelect} beats ${playerSelect}`
        console.log(`Lost, ${computerSelect} beats ${playerSelect}`);
        computerScore += 1;
        return computerScore;
    } else if ( playerSelect == "paper" && computerSelect == "rock" ) {
        outcome.textContent = `Won, ${playerSelect} beats ${computerSelect}`
        console.log(`Won, ${playerSelect} beats ${computerSelect}`);
        playerScore += 1;
        return playerScore;
    } else if ( playerSelect == "rock" && computerSelect == "scissors" ) {
        outcome.textContent = `Won, ${playerSelect} beats ${computerSelect}`
        console.log(`Won, ${playerSelect} beats ${computerSelect}`);
        playerScore += 1;
        return playerScore;
    }  else if ( playerSelect == "rock" && computerSelect == "paper" ) {
        outcome.textContent = `Lost, ${computerSelect} beats ${playerSelect}`
        console.log(`Lost, ${computerSelect} beats ${playerSelect}`);
        computerScore += 1;
        return computerScore; 
    } else if ( playerSelect == "scissors" && computerSelect == "paper") {
        outcome.textContent = `Won, ${playerSelect} beats ${computerSelect}`
        console.log(`Won, ${playerSelect} beats ${computerSelect}`); 
        playerScore += 1;
        return playerScore;
    } else if ( playerSelect == "scissors" && computerSelect == "rock") {
        outcome.textContent = `Lost, ${computerSelect} beats ${playerSelect}`
        console.log(`Lost, ${computerSelect} beats ${playerSelect}`); 
        computerScore += 1;
        return computerScore;
    }
};

//ends the game if one has 5 scores 
function endTheGame() {
    if(playerScore == 5) {
        p.textContent = "YOU WON";
        popup.style.display = "flex";
    } else if (computerScore == 5) {
        p.textContent = "YOU LOST";
        popup.style.display = "flex"
    }
}

// displays score
function scoreDisplay() {
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`; 
}

// selection img
function displaySelection() {
    document.getElementById("playerPick").src = playerSvg;
    document.getElementById("computerPick").src = computerSvg;
}

//reset the game
function resetEverything(){
    playerScore = 0;
    computerScore = 0;
    popup.style.display = "none";
    outcome.textContent = "First to 5 points wins the game";
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    document.getElementById("playerPick").src = `./img/question-mark-svgrepo-com.svg`;
    document.getElementById("computerPick").src = `./img/question-mark-svgrepo-com.svg`;
    return [playerScore, computerScore]
}

reset.addEventListener("click", () => {
    resetEverything();
})