/*----- constants -----*/
let count = 0;
let totalGames = 15;
let timerId = setInterval(countdown, 1000);
let timeLeft = 30;

/*----- state variables -----*/

const colors = ['RED', 'ORANGE','YELLOW','GREEN', 'BLUE','PURPLE','BLACK','WHITE','PINK','BROWN','GREY']

//rizvan suggestion

/* colorCards = [
    {background:color[i], colorWord: color[j]},
    {background:color[j], colorWord: color[i]},
    ] */

// ernest suggestion

/*----- cached elements  -----*/
let startBtn = document.querySelector('#startgame');
let gameScreen = document.querySelector('#game');
let colorCard = document.querySelector('#colorcard');
let buttonOne = document.querySelector('#buttonone');
let buttonTwo = document.querySelector('#buttontwo');
let score = document.querySelector('#score');
let timer = document.querySelector('#timer');
let result = document.querySelector('#result');

/*----- event listeners -----*/
startBtn.addEventListener('click', gameStart);
buttonOne.addEventListener('click', winCount);
buttonTwo.addEventListener('click', winCount);
buttonOne.addEventListener('click', colorChange);
buttonTwo.addEventListener('click', colorChange);

// how to stop calling 2 functions for the same event listener by using callback function?

/*----- functions -----*/
function gameStart (event){
event.target.parentElement.style.display = 'none';
gameScreen.style.display = 'visible';
}

function gameEnd (){
    gameScreen.style.display = 'none';
    result.style.display = 'visible';
}

// how to trigger the gamescreen & result screen to be visible/none?

function winCount (event){
if (event.target.innerText === colorCard.innerText) {
count+=1;
score.innerHTML = `${count} of ${totalGames}`;
} if (count === 15 || timeLeft === 0 ) {
gameEnd();
} else {
score.innerHTML = `${count} of 15`;
} colorChange();
}

function colorChange(){
let randomColorOne = Math.floor(Math.random()*colors.length);
let randomColorTwo = Math.floor(Math.random()*colors.length);
while (randomColorOne === randomColorTwo){
randomColorTwo = Math.round(Math.random()*colors.length);
}
colorCard.style.backgroundColor = colors[randomColorOne];
colorCard.innerText = colors[randomColorTwo];
buttonOne.innerText = colors[randomColorTwo];
buttonTwo.innerText = colors[randomColorOne];
}
// how shall i randomise the position of button one and two?

//timer function - reference from https://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward


function countdown(event) {
if (timeLeft == -1) {
} else {
    timer.innerText =  `${timeLeft} Seconds Remaining`;
    timeLeft--;
clearInterval();
}
}
// how to start timer when game screen started