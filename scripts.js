let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");


function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertWord(letter) {
    if (letter === "r") {
        return "Rock";
    } else if (letter === "p") {
        return "Paper";
    } else if (letter === "s") { 
        return "Scissors";
    }
    }


function win(userChoice, computerChoice)  {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "YOU WIN 💯! " + convertWord(userChoice) + " beats " + convertWord(computerChoice) + ".";
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);
}

function lose(userChoice, computerChoice)  {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "YOUR A LOSER 💩!  " + convertWord(computerChoice) + " beats " + convertWord(userChoice) + ".";
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 300);    
}

function tie(userChoice, computerChoice)  {
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "IT'S A TIE 👔! You both chose " + convertWord(userChoice) + ".";
    userChoice_div.classList.add('white-glow');
    setTimeout(function() {userChoice_div.classList.remove('white-glow')}, 300);
}


function playRound(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr": 
            lose(userChoice, computerChoice); 
            break;
        case "rr":
        case "ss":
        case "pp":
            tie(userChoice, computerChoice);
            break;
    }
    if (userScore == 5 && computerScore < 5) {
        result_div.innerHTML = "GAME OVER! YOUR THE WINNER! 😀😁😀😁" ;
        result_div.classList.add('green-glow');
        setTimeout(function() {result_div.classList.remove('green-glow')}, 800);
        userScore = 0
        computerScore = 0


    } else if (computerScore == 5 && userScore < 5) {
        result_div.innerHTML = "GAME OVER! YOUR A LOSER! 😐😑😐😑" ;
        result_div.classList.add('red-glow');
        setTimeout(function() {result_div.classList.remove('red-glow')}, 800);
        userScore = 0
        computerScore = 0
    }

}


function userPick() {
    rock_div.addEventListener('click', function() {
        playRound("r");
    })

    scissors_div.addEventListener('click', function() {
        playRound("s");
    })

    paper_div.addEventListener('click', function() {
        playRound("p");
    })
}

userPick();


