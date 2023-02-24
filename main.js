/*----- constants -----*/
const totalGames = 30;
const colors = [
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

/*----- state variables  -----*/
let count = 0;
let timeLeft = 30;

/*----- cached elements  -----*/
let instructionScreen = document.querySelector("#instruction");
let gameScreen = document.querySelector("#game");
let resultScreen = document.querySelector("#result");

let startBtn = document.querySelector("#startgame");

let colorCard = document.querySelector("#colorcard");
let score = document.querySelector("#score");
let timer = document.querySelector("#timer");
let buttonOne = document.querySelector("#buttonone");
let buttonTwo = document.querySelector("#buttontwo");
let buttonThree = document.querySelector("#buttonthree");

let playerResult = document.querySelector("#playerresult");
let restartBtn = document.querySelector("#startbutton");

/*----- event listeners -----*/
startBtn.addEventListener("click", gameStart);
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

/*----- instruction functions -----*/
function gameStart(event) {
  changeScreen("game");
  countdown(timeLeft);
}

/*----- game functions -----*/
function winCount(event) {
  if (count === 30) {
    gameEnd();
  } else {
    let buttonColor = event.target.innerText.toLowerCase();
    let cardColor = colorCard.style.color.toLowerCase();
    if (buttonColor === cardColor) {
      count += 1;
      score.innerHTML = `${count} of ${totalGames}`;
    } else {
      score.innerHTML = `${count} of ${totalGames}`;
    }
    colorChange();
  }
}

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
  if (count >= 15) {
    playerResult.innerText = `Congrats! You got ${count} out of ${totalGames}!`;
  } else if (count < 15) {
    playerResult.innerText = `You got ${count} out of ${totalGames}!`;
  }
}

/*----- result functions -----*/

function startAgain() {
  count = 0;
  timeLeft = 30;
  timer.innerText = "";
  score.innerText = "0 of 30";
  changeScreen("instruction");
}
