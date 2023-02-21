# **The Color Code Game**

## **User Stories**
-	As a player, I get to choose the right answer from a combination of unique colour cards & colour vocabularies.
-	As a player, I will experience The Stroop Effect while playing the colour code game.
-	As a player, I can view my win count within 30 seconds.
-	As a player, I get to see my ranking with other players. (Stretch)

## **Project Brief**
With The Color Code Game, you get to experience The Stroop Effect while getting confused between the name of a color and the other properties around it (eg. the card color, the color of the word).

### **Game Background**
The Stroop Effect
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Stroop_comparison.png/435px-Stroop_comparison.png "The Stroop Effect")
In psychology, the Stroop effect is the delay in reaction time between congruent and incongruent stimuli. It was named after John Ridley Stroop.
The theory explains through a basic task that demonstrates the effect occurs when there is a mismatch between the name of a color (e.g., "blue", "green", or "red") and the color it is printed on (i.e., the word "red" printed in blue ink instead of red ink). When asked to name the color of the word it takes longer and is more prone to errors when the color of the ink does not match the name of the color.

***

### **Technical Requirements**
- Render a game in the browser.
- Include win/loss logic and render win/loss messages in HTML.
- Include separate HTML, CSS & JavaScript files.
- Have properly indented HTML, CSS & JavaScript.
- No remaining dead and/or commented out code.
- Have functions and variables that are named sensibly.
- Be coded in a consistent manner.
- Game is deployed online.

### **Neccessary Deliverables**
The code for a working game that meets or exceeds the above technical requirements, built by you, and hosted.
Frequent commits dating back to the very beginning of the project. Commit messages should be in the present tense.

***

### **Screenshots**
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")


### **Technologies & Tools Used**
1. HTML
2. CSS
3. JavaScript
4. Git & GitHub

### **Getting Started**
#### **Instructions**
1. There will be 15 unique cards with the colour word presented in different combinations.
2. Challenge: Guess as many colours within 30 seconds!
Play the game here: [I'm an inline-style link](https://didadeeee.github.io/color-code/)

### **Next Steps**
- Increased complexity of the game
- Consider using the MVC Approach

### **Biggest Challenge###
```javascript
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
```
```javascript
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
```

```javascript
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
```

### **Key Learnings###
```javascript
unction changeScreen(currentScreen) {
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
```
