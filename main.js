/*----- constants -----*/
let winCount = 5;

const color = ['RED', 'ORANGE','YELLOW','GREEN', 'BLUE','PURPLE','BLACK','WHITE','PINK','BROWN','GREY']

let i = Math.floor((Math.random()*color.length));
let j = i;

while( i === j) {
j = Math.floor((Math.random()*color.length));
}
//rizvan suggestion

/* colorCard = [
    {background:color[i], colorWord: color[j]},
    {background:color[i], colorWord: color[j]},
    {background:color[i], colorWord: color[j]},
    {background:color[i], colorWord: color[j]}, 
    ] */

// ernest suggestion

/*----- state variables -----*/


/*----- cached elements  -----*/
const screenOne = document.querySelector('#screenOne');
const screenTwo = document.querySelector('#screenTwo');
const screenThree = document.querySelector('#screenThree');

const readyBtn = document.querySelector('#ready');
const leftBtn = document.querySelector('#buttonone');
const rightBtn = document.querySelector('#buttontwo');

const startGame = document.querySelector('#startGame');
const startBtn = document.querySelector('#startagain');

const timer = document.querySelector('#timer');

/*----- event listeners -----*/
readyBtn.addEventListener('click', changeScreenOne);
startGame.addEventListener('click', changeScreenTwo);
leftBtn.addEventListener('click', newCard);
rightBtn.addEventListener('click', newCard);

// stretch goals: how shall i make use of array to perform same action on different id attributes?

/*----- functions -----*/

function changeScreenOne(event){
event.preventDefault();
event.target.parentElement.remove();
screenTwo.style.visibility = 'visible';
}

function changeScreenTwo(event){
    event.preventDefault();
    event.target.parentElement.remove();
    event.target.parentNode.style.visibility = 'hidden';
    screenThree.style.visibility = 'visible'; 
}

// stretch goals: how shall i update the visibility of the subsequent screen to visible using event.target?

function newCard(event){
event.preventDefault();
event.target.parentElement.remove();
let createP = document.createElement('p');
createP.setAttribute('id', 'score');
createP.innerText = '0/15';
// find similarities in the code and call it repetitively
let createDiv = document.createElement('div');
createDiv.setAttribute('id', 'colorcard' );
let leftBtn = document.createElement('button');
let rightBtn = document.createElement('button')

leftBtn.setAttribute('class', 'answerbutton');
rightBtn.setAttribute('class', 'answerbutton');

createDiv.innerHTML = color[i]
createDiv.style.backgroundColor = color[j];     
leftBtn.innerHTML = color[i];
rightBtn.innerHTML = color[j];

document.querySelector('body').append(createP);
document.querySelector('body').append(createDiv);
document.querySelector('body').append(leftBtn, rightBtn);
}


// how to repeat the process everytime player clickes answerbutton?
// how to compare the results? 
// once answer compared, restart newCard

//timer function

/* let timerId = setInterval(countdown, 1000);
let timeLeft = 3;
function countdown() {
if (timeLeft == -1) {
screenThree.style.visibility = 'hidden';
} else {
    timer.innerHTML = timeLeft + ' Seconds Remaining';
    timeLeft--;
  }
}

*/
// reference from https://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward

