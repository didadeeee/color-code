/*----- constants -----*/
let count = 0;
let totalGames = 15;
let timeLeft = 30;

/*----- state variables -----*/
let colors = [
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
let gameScreen = document.querySelector("#game");
let resultScreen = document.querySelector("#result");

let startBtn = document.querySelector("#startgame");
let restartBtn = document.querySelector("#startbutton");
let playerResult = document.querySelector("#playerresult");

let colorCard = document.querySelector("#colorcard");
let score = document.querySelector("#score");
let timer = document.querySelector("#timer");

let buttonOne = document.querySelector("#buttonone");
let buttonTwo = document.querySelector("#buttontwo");
let buttonThree = document.querySelector("#buttonthree");

/*----- event listeners -----*/
startBtn.addEventListener("click", gameStart);
// set timer as soon as gamescreen starts - jeremy
restartBtn.addEventListener("click", startAgain);

let buttons = document.querySelectorAll(".answer");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    winCount(event);
  })
);

/*----- functions -----*/
function changeScreen(currentScreen) {
  if (currentScreen === "instruction") {
    instructionScreen.style.display = "block";
    gameScreen.style.display = "none";
    resultScreen.style.display = "none";
  } else if (currentScreen === "game") {
    gameScreen.style.display = "block";
    instructionScreen.style.display = "none";
    resultScreen.style.display = "none";
    colorCard.innerText = "PURPLE";
    colorCard.style.color = "black";
  } else if (currentScreen === "result") {
    resultScreen.style.display = "block";
    instructionScreen.style.display = "none";
    gameScreen.style.display = "none";
  }
}
// wenda's guide

/*----- instruction functions -----*/
function gameStart(event) {
  changeScreen("game");
  countdown(timeLeft);
}

/*----- game functions -----*/
function winCount(event) {
  if (count === 15) {
    gameEnd();
  } else {
    let buttonColor = event.target.innerText.toLowerCase();
    let cardColor = colorCard.style.color.toLowerCase();
    if (buttonColor === cardColor) {
      count += 1;
      score.innerHTML = `${count} of ${totalGames}`;
    } else {
      score.innerHTML = `${count} of 15`;
    }
    colorChange();
  }
}

// random 3 colors
// randomly choose 3 colors from the colors array and cannot have repeat numbers
// declare an array store non-repeat numbers
// get random number
// if exist then get random number again
// if not then add to the numbers array
// numbers array cannot more than 3

function generateRandomColors() {
  let numbers = [];
  while (numbers.length < 3) {
    let randomColor = Math.floor(Math.random() * colors.length);
    if (numbers.includes(randomColor) !== true) {
      numbers.push(randomColor);
    }
  }

  const newColors = [];

  numbers.forEach((number) => {
    newColors.push(colors[number]);
  });

  return newColors;
}

function colorChange() {
  let randomColors = generateRandomColors();
  colorCard.style.backgroundColor = randomColors[0];
  colorCard.innerText = randomColors[1];
  colorCard.style.color = randomColors[2];

  randomColors.sort();
  buttonOne.innerText = randomColors[0];
  buttonTwo.innerText = randomColors[1];
  buttonThree.innerText = randomColors[2];
}
// consider using array to create five buttons
function countdown() {
  timer.innerText = timeLeft + " SECONDS LEFT";

  let interval = setInterval(function () {
    timeLeft--;
    timer.innerText = timeLeft + " SECONDS LEFT";
    if (timeLeft < 1) {
      gameEnd();
      clearInterval(interval);
    }
  }, 1000);
}

function gameEnd() {
  changeScreen("result");
  if (count > 7) {
    playerResult.innerText = `NICE! You got ${count} out of ${totalGames}`;
  } else if (count < 7) {
    playerResult.innerText = `You got ${count} out of ${totalGames}, try harder next time!`;
  }
}

/*----- result functions -----*/

function startAgain() {
  count = 0;
  timeLeft = 30;
  timer.innerText = "";
  score.innerText = "0 of 15";
  changeScreen("instruction");
}
