/*----- constants -----*/
let count = 0;
let totalGames = 15;
let timeLeft = 3;

/*----- state variables -----*/
colors = [
  "RED",
  "ORANGE",
  "YELLOW",
  "GREEN",
  "BLUE",
  "PURPLE",
  "BLACK",
  "WHITE",
  "PINK",
  "BROWN",
  "GREY",
];

/*----- cached elements  -----*/
let instructionScreen = document.querySelector("#instruction");
let startBtn = document.querySelector("#startgame");
let gameScreen = document.querySelector("#game");
let colorCard = document.querySelector("#colorcard");
let score = document.querySelector("#score");
let timer = document.querySelector("#timer");
let buttonOne = document.querySelector("#buttonone");
let buttonTwo = document.querySelector("#buttontwo");
let buttonThree = document.querySelector("#buttonthree");
let resultScreen = document.querySelector("#result");
let restartBtn = document.querySelector("#startbutton");
let playerResult = document.querySelector("#playerresult");


function changeScreen(currentScreen) {
  if (currentScreen === "instruction") {
    instructionScreen.style.display = "block";
    gameScreen.style.display = "none";
    resultScreen.style.display = "none";
  } else if (currentScreen === "game") {
    gameScreen.style.display = "block";
    instructionScreen.style.display = "none";
    resultScreen.style.display = "none";
  } else if (currentScreen === "result") {
    resultScreen.style.display = "block";
    instructionScreen.style.display = "none";
    gameScreen.style.display = "none";
  }
}
// wenda's guide

/*----- event listeners -----*/

restartBtn.addEventListener("click", startAgain);

startBtn.addEventListener("click", gameStart);
// set timer as soon as gamescreen starts - jeremy

/*----- functions -----*/
function startAgain() {
changeScreen("instruction");
}

function gameStart(e) {
  countdown(timeLeft);
  changeScreen("game");
  colorChange();
  winCount(e);
}

function gameEnd() {
  changeScreen("result");
  if (count > 7) {
    playerResult.innerText = `CONGRATS! You got ${count} out of ${totalGames}`;
  } else if (count < 7) {
    playerResult.innerText = `You got ${count} out of ${totalGames}, Try Harder?`;
  }
}

function winCount(event) {
  if (event.target.innerText === colorCard.innerText) {
    count += 1;
    score.innerHTML = `${count} of ${totalGames}`;
  }
  if (count === 15) {
    gameEnd();
  } else {
    score.innerHTML = `${count} of 15`;
  }
}

function colorChange() {
  let randomColorOne = Math.floor(Math.random() * colors.length);
  let randomColorTwo = Math.floor(Math.random() * colors.length);
  let randomColorThree = Math.floor(Math.random() * colors.length);
  while (
    randomColorOne === randomColorTwo ||
    randomColorOne === randomColorThree
  ) {
    randomColorOne = Math.round(Math.random() * colors.length);
  }
  colorCard.style.backgroundColor = colors[randomColorOne];
  colorCard.innerText = colors[randomColorTwo];
  colorCard.style.color = colors[randomColorThree];
  // how shall i randomise the position of button one and two?
  // how to make sure button one two three is not the same
  // how to prevent undefined
  buttonOne.innerText = colors[randomColorOne];
  buttonTwo.innerText = colors[randomColorTwo];
  buttonThree.innerText = colors[randomColorThree];
}
//rizvan help

let buttons = document.querySelectorAll(".answer");
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    colorChange();
    winCount(e);
  })
);

// alice's help - calling 2 functions for a list of buttons

function countdown(seconds) {
  let interval = setInterval(function () {
    timer.innerText = seconds + " seconds left";
    seconds--;
    if (seconds < 0) {
      gameEnd();
      clearInterval(interval);
    }
  }, 1000);
}
