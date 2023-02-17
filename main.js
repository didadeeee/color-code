/*----- constants -----*/
let color = ['RED', 'ORANGE','YELLOW','GREEN', 'BLUE','PURPLE','BLACK','WHITE','PINK','BROWN','GREY']

/*----- state variables -----*/


/*----- cached elements  -----*/
const readyBtn = document.querySelector('button');
const screenOne = document.querySelector('#screenOne');
const screenTwo = document.querySelector('#screenTwo');
const screenThree = document.querySelector('#screenThree')
const answerButton = document.querySelector('.answerbutton');


// stretch goals:how shall i make use of array to store different screen id?

const startGame = document.querySelector('#startGame')

/*----- event listeners -----*/
readyBtn.addEventListener('click', changeScreen);
startGame.addEventListener('click', changeScreenTwo);
answerButton.addEventListener('click', newCard);
// stretch goals: how shall i make use of array to perform same action on different id attributes?

/*----- functions -----*/

function changeScreen(event){
event.preventDefault();
event.target.parentElement.remove();
screenTwo.style.visibility = 'visible';
}
// stretch goals: how shall i update the visibility of the subsequent screen to visible using event.target?


function newCard(event){
event.preventDefault();
event.target.parentElement.remove();
let createP = document.createElement('p');
createP.setAttribute('id', 'score');
createP.innerText = '0/15';

let createDiv = document.createElement('div');
createDiv.setAttribute('id', 'colorcard' );
let createBtn = document.createElement('button');
createBtn.setAttribute('class', 'answerbutton');
createDiv.innerHTML = color[0];
createDiv.style.backgroundColor = color[6];     
createBtn.innerHTML = color[2]

document.querySelector('body').append(createP);
document.querySelector('body').append(createDiv);
document.querySelector('body').append(createBtn);
}

// how to create the second button and compare the results?
// once answer compared, restart newCard





function changeScreenTwo(event){
event.preventDefault();
event.target.parentElement.remove();
event.target.parentNode.style.visibility = 'hidden';
screenThree.style.visibility = 'visible';


}
