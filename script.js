let userscore = 0;
let compscore = 0;

const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg"); // single element

const UserScorePara=document.querySelector("#User-score");
const CompScorePara=document.querySelector("#Comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("The game was a draw");
    msg.innerText = "The game was a draw. Try again!";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin,userChoise,compChoise) => {
    if (userWin) {
        userscore++;
        UserScorePara.innerHTML=userscore;
        msg.innerText = `You win! your ${userChoise} beats ${compChoise}`;
        msg.style.backgroundColor = "lightgreen";
    } else {
        compscore++;
        CompScorePara.innerHTML=compscore;
        msg.innerText = `You lost. ${compChoise} beats ${userChoise}`;
        msg.style.backgroundColor = "red";
    }
};

const PlayGame = (userChoise) => {
    console.log("UserChoice =", userChoise);
    const compChoise = genCompChoice();
    console.log("CompChoice =", compChoise);

    if (userChoise === compChoise) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoise === "rock") {
            userWin = compChoise === "paper" ? false : true;
        } else if (userChoise === "paper") {
            userWin = compChoise === "scissors" ? false : true;
        } else {
            userWin = compChoise === "rock" ? false : true;
        }
        showWinner(userWin,userChoise,compChoise);
    }
};

choises.forEach((choise) => {
    choise.addEventListener("click", () => {
        const userChoise = choise.getAttribute("id");
        PlayGame(userChoise);
    });
});
