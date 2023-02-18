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
let play = document.querySelector('.musicplay');
let stop = document.querySelector('.musicstop');

/*----- event listeners -----*/
startBtn.addEventListener('click', gameStart);
startBtn.addEventListener('click', winCount);
buttonOne.addEventListener('click', winCount);
buttonTwo.addEventListener('click', winCount);
buttonOne.addEventListener('click', colorChange);
buttonTwo.addEventListener('click', colorChange);

// how to call two functions once a event is invoked

/*----- functions -----*/
function gameStart (event){
event.preventDefault();
event.target.parentElement.style.display = 'none';
}

function gameStart (event){
event.preventDefault();
event.target.parentElement.style.display = 'none';   
}

function winCount (event){
if (event.target.innerText === colorCard.innerText) {
count+=1;
score.innerHTML = `${count} of ${totalGames}`;
} else {
score.innerHTML = `${count} of 15`;
} colorChange();
}

// how to stop the game when count reach 15

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
// how to show result screen once count down is complete