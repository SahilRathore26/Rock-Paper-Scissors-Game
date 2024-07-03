let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const drawGame = () => {
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Game was Draw, Play again.";
}

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
    }
};

const playGame = (userChoice) => {
    //get computer choice
    const compChoice = getCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //comp- paper, scissors..
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //comp- rock, scissors..
            userWin = compChoice === "rock" ? true : false;
        } else {
            //comp- rock, paper.. 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});