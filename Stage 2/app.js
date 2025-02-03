const colorBox = document.getElementById('colorBox');
const colorOptions = document.getElementById('colorOptions');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreBoard = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');

const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple'];
let targetColor;
let score = 0;
window.addEventListener('DOMContentLoaded', startNewGame);
function startNewGame(){
    targetColor = colors[Math.floor(Math.random()* colors.length)];
    colorBox.style.backgroundColor = targetColor;
    gameStatus.textContent = '';
    scoreBoard.textContent =  `Score: ${score}`;
    colorOptions.innerHTML = '';
    const shuffledColors = [...colors].sort(()=> Math.random() - 0.5);
    shuffledColors.forEach(color =>{
        const btn = document.createElement('div');
        btn.className = 'colorOption';
        // Create a new attribute
        var newAttr = document.createAttribute('data-testid');
        newAttr.value = 'colorOption';
        // Add the new attribute to the element
        btn.setAttributeNode(newAttr);
        btn.style.backgroundColor = color;
        btn.addEventListener('click',()=> checkGuess(color));
        colorOptions.appendChild(btn);
    });
}
const checkGuess =(selectedColor)=>{
    
    if(selectedColor === targetColor){
        gameStatus.textContent = 'Correct';
        gameStatus.classList.add('correct');
        score++;
    }
    else {
        gameStatus.textContent = 'Wrong! Try again.';
        gameStatus.classList.add('wrong');

    }
    // Reset the target color after each guess
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;

    // Remove the class after the animation is complete to allow it to run again
    gameStatus.addEventListener('animationend', () => {
        gameStatus.classList.remove('correct', 'wrong');
    });
    scoreBoard.textContent = `Score: ${score}`;
}
newGameButton.addEventListener('click', ()=>{
    score = 0;
    startNewGame();
});


// Start the game for the first time  
startNewGame();