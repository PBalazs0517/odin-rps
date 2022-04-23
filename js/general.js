let computerSelect = "";
let playerSelect = "";
let playerScore = 0;
let computerScore = 0;

function playerChoose() {
    let isValid = 1;
    while (isValid == 1) {
        let sItem = prompt("Rock, paper or scissors?")
        sItem = sItem.toLocaleLowerCase(); 
        if ( sItem == "rock" || sItem == "paper" || sItem == "scissors") {
            playerSelect = sItem;
            return playerSelect;
        } else {
            alert("Invalid item!");
        }
        if ( sItem == "rock" || sItem == "paper" || sItem == "scissors") {
            isValid -= 1;
            return isValid;
        }
    }
}

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

function playRound() {
    if ( playerSelect == computerSelect) {
        console.log("Draw: " +  playerSelect + " is equal to " + computerSelect + ".");
    } else if ( playerSelect == "paper" && computerSelect == "scissors") {
        console.log("Lost: paper is weaker than scissors");
        computerScore += 1;
        return computerScore;
    } else if ( playerSelect == "paper" && computerSelect == "rock" ) {
        console.log("Won: paper is stronger than rock");
        playerScore += 1;
        return playerScore;
    } else if ( playerSelect == "rock" && computerSelect == "scissors" ) {
        console.log("Won: rock is stronger than scissors"); 
        playerScore += 1;
        return playerScore;
    }  else if ( playerSelect == "rock" && computerSelect == "paper" ) {
        console.log("Lost: rock is weaker than paper");
        computerScore += 1;
        return computerScore; 
    } else if ( playerSelect == "scissors" && computerSelect == "paper") {
        console.log("Won: scissors is stronger than paper"); 
        playerScore += 1;
        return playerScore;
    } else if ( playerSelect == "scissors" && computerSelect == "rock") {
        console.log("Lost: scissors is weaker than rock"); 
        computerScore += 1;
        return computerScore;
    } else {
        console.log("Invalid item");
    }
}

let gameIsNotFinished = true;

function calcEndOfTheGame(){
    if (playerScore == 5 || computerScore == 5 ) {
        gameIsNotFinished = false;
    }
    return gameIsNotFinished;
}

function game() {
    while(gameIsNotFinished) {
        playerChoose(); 
        computerPlay();
        playRound();
        calcEndOfTheGame();
    }

    console.log("P: " + playerScore);
    console.log("C: " + computerScore);

    if (playerScore == 5) {
        console.log("Well done YOU won!");
    } 
    if (computerScore == 5) {
        console.log("Sorry YOU lost! Try again!");
    };

    gameIsNotFinished = true;
    playerScore -= playerScore;
    computerScore -= computerScore;
    return [playerScore, computerScore, gameIsNotFinished];
}