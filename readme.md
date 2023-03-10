# **The Color Code Game**

## **Game Description**

With The Color Code Game, you get to experience The Stroop Effect while getting confused between the colour word and the other properties around it! (eg. the card colour, the colour of the word).

### **Background**

**The Stroop Effect**
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Stroop_comparison.png/435px-Stroop_comparison.png "The Stroop Effect") <br/>

<p>Named after John Ridley Stroop, The Stroop effect is the delay in reaction time between congruent and incongruent stimuli.<br/>
The theory explains through a basic task that demonstrates the effect occurs when there is a mismatch between the name of a color and the color it is printed on.<br/>
It is demonstrated through the task that it takes longer time and is more prone to errors when both properties does not match.</p>

---

### **Screenshots**

1. Welcome Screen  
   ![welcome screen](./images/instruction.png "Welcome Screen")
2. Game Screen  
   ![game screen](./images/game.png "Game Screen")
3. Result Screen  
   ![result screen](./images/result.png "Result Screen")

### **Technologies & Tools Used**

1. HTML
2. CSS
3. JavaScript
4. Git & GitHub

### **Getting Started**

#### **Instructions**

1. There will be 30 unique cards with the colour word presented in different combinations.
2. To Win: Get at least 15 colors of the colour word right within 30 seconds: [Play The Color Code Game Now](https://didadeeee.github.io/color-code/)

### **Next Steps**

- Increased complexity of the game (additional answer buttons, score board display)
- MVC Approach

### **Biggest Challenge**

1. To generate 3 random index numbers to be applied between the color combinations and answer buttons

- Same value between answer buttons (correct answer must appear in the answer buttons)
- Generate random colors with no repeat

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

- Randomise button position (in this case I used sort as each color combination is different and it sorts the color buttons' position in ascending order)

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

2. Switching the display state of the main container to instruction, game and result screen

```javascript
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
```

### **Key Learnings**

<p>1. Recognition of weaker areas - for loop/forEach; callback function; why return?<br/>
2. My own cheatsheet<br/>
3. Learning priorities - Understanding the concept -> Be familiar with the key concepts -> MVC -> Dry Code -> Short hand synthax -> CSS Grid/Flexbox<br/>
4. Be patient by breaking problems to smaller problems - look at everything as input -> output<br/>
5. Mental Blocks: Format, Indentation, Sequence matters A LOT - 1st layer & 2nd layer if else statements, HTML, if else syntax writing<br/>
6. Having an initial, precise plan (pseudocode) is very IMPORTANT!<br/></p>

### **Q&A**

Thank you :)

### **Resources**

Timer function from <a href="https://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward">stackoverflow</a><br/>
Background Image by <a href="https://www.freepik.com/free-vector/flat-design-abstract-background_18895874.htm#query=background&position=29&from_view=keyword&track=sph">Freepik</a><br/>
Color Palette by <a href="https://coolors.co/user/palettes">coolors<a>
