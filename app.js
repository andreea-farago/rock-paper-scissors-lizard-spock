let userScore = 0;
let computerScore = 0;
const userScore_td = document.getElementById("user-score");
const computerScore_td = document.getElementById("computer-score");
const result_p = document.getElementById("result");
const rock_li = document.getElementById("rock");
const paper_li = document.getElementById("paper");
const scissors_li = document.getElementById("scissors");
const lizard_li = document.getElementById("lizard");
const spock_li = document.getElementById("spock");
const resetBtn = document.getElementById("reset-button");


function draw(userChoice, computerChoice){
    userScore_td.innerHTML = userScore;
    computerScore_td.innerHTML = computerScore;
    result_p.innerHTML = "It is a draw!";
    document.getElementById("score-container").classList.add("draw-background");
    setTimeout (function(){ document.getElementById("score-container").classList.remove("draw-background")}, 1000);
}
function win(userChoice, computerChoice){
    userScore++;
    userScore_td.innerHTML = userScore;
    computerScore_td.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
    document.getElementById("score-container").classList.add("win-background");
    setTimeout (function(){ document.getElementById("score-container").classList.remove("win-background")}, 1000);
}
function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_td.innerHTML = computerScore;
    userScore_td.innerHTML = userScore;
    result_p.innerHTML = userChoice + " is beaten by " + computerChoice + ".You lost!"
    document.getElementById("score-container").classList.add("lose-background");
    setTimeout (function(){ document.getElementById("score-container").classList.remove("lose-background")}, 1000);
}

function getComputerChoice(){
    const randomValue = Math.random();
    if(randomValue <0.2){
        return "ROCK";
    } else if (randomValue < 0.4){
        return "PAPER";
    } else if (randomValue < 0.6){
        return "SCISSORS";
    } else if (randomValue < 0.8){
        return "LIZARD";
    }else{
        return "SPOCK";
    }
}
function getWinner(userChoice){
    const computerChoice = getComputerChoice();
    console.log("user choice:  " + userChoice);
    console.log("computer choice:  " + computerChoice);
    if (computerChoice === userChoice){
        draw(userChoice, computerChoice);
    } else if(userChoice === "SCISSORS" && computerChoice === "PAPER" || userChoice === "PAPER" && computerChoice === "ROCK" ||  userChoice === "ROCK" && computerChoice === "LIZARD" ||  userChoice === "LIZARD" && computerChoice === "SPOCK" ||  userChoice === "SPOCK" && computerChoice === "SCISSORS" ||  userChoice === "SCISSORS" && computerChoice === "LIZARD" ||  userChoice === "LIZARD" && computerChoice === "PAPER" ||  userChoice === "PAPER" && computerChoice === "SPOCK" ||  userChoice === "SPOCK" && computerChoice === "ROCK" ||  userChoice === "ROCK" && computerChoice === "SCISSORS" ){
        win(userChoice, computerChoice);
    } else{
        lose(userChoice, computerChoice);
    }
}

rock_li.addEventListener("click", () => {
    getWinner("ROCK");
});
paper_li.addEventListener("click", () => {
    getWinner("PAPER");
});
scissors_li.addEventListener("click", () => {
    getWinner("SCISSORS");
});
lizard_li.addEventListener("click", () => {
    getWinner("LIZARD");
});
spock_li.addEventListener("click", () => {
    getWinner("SPOCK");
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScore_td.innerHTML = userScore;
    computerScore_td.innerHTML = computerScore;
})