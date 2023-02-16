/*----- constants -----*/
/*screen = [
{id: screenOne},
{id: screenTwo},
{id: screenThree},
{id: screenFour}
]*/

/*----- state variables -----*/


/*----- cached elements  -----*/
const readyBtn = document.querySelector('button');
const screenOne = document.getElementById('screenOne');
const screenTwo = document.getElementById('screenTwo');
const screenThree = document.getElementById('screenThree')
// how shall i make use of array to store different screen id?

const startGame = document.getElementById('startGame')

/*----- event listeners -----*/
readyBtn.addEventListener('click', changeScreen);
startGame.addEventListener('click', changeScreenTwo);
// how shall i make use of array to perform same action on different id attributes?

/*----- functions -----*/
function changeScreen(event){
event.preventDefault();
event.target.parentNode.style.visibility = 'hidden';
event.target.parentElement.remove();
screenTwo.style.visibility = 'visible';
}
// how shall i update the visibility of the subsequent screen to visible using event.target?

function changeScreenTwo(event){
event.preventDefault();
event.target.parentElement.remove();
event.target.parentNode.style.visibility = 'hidden';
screenThree.style.visibility = 'visible';
}

