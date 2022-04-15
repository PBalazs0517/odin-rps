let computerSelect = "";
let playerSelect = "";
let score = 0;
//let isWonIsLostIsDraw = "";

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

//function scoreCounter() {
//    console.log(isWonIsLostIsDraw);
//    if (isWonIsLostIsDraw == "won") {
//        score += 1;
//        return score;
//    }
//}

function playRound() {
    if ( playerSelect == computerSelect) {
        console.log("Draw: " +  playerSelect + " is equal to " + computerSelect + ".");
    } else if ( playerSelect == "paper" && computerSelect == "scissors") {
        console.log("Lost: paper is weaker than scissors");
    } else if ( playerSelect == "paper" && computerSelect == "rock" ) {
        console.log("Won: paper is stronger than rock");
        score += 1;
        return score;
    } else if ( playerSelect == "rock" && computerSelect == "scissors" ) {
        console.log("Won: rock is stronger than scissors"); 
        score += 1;
        return score;
    }  else if ( playerSelect == "rock" && computerSelect == "paper" ) {
        console.log("Lost: rock is weaker than paper"); 
    } else if ( playerSelect == "scissors" && computerSelect == "paper") {
        console.log("Won: scissors is stronger than paper"); 
        score += 1;
        return score;
    } else if ( playerSelect == "scissors" && computerSelect == "rock") {
        return isWonIsLostIsDraw;
    } else {
        console.log("Invalid item");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerChoose(); 
        computerPlay();
        playRound();
        //scoreCounter();
    }
    console.log(score);
    if (score >= 3) {
        console.log("Well done YOU won!")
    } else {
        console.log("Sorry YOU lost! Try again!")
    };
    score -= score;
    return score;
}