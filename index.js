// Simon Game Implementation in JavaScript

// Initialize variables
let sequence = [];
let playerSequence = [];
let level = 0;

const colors = ["leftTop", "rightTop", "leftBottom", "rightBottom"];

// Start the game
function startGame() {
  sequence = [];
  playerSequence = [];
  level = 0;
  nextLevel();
}

// Generate the next sequence
function nextLevel() {
  level++;
  playerSequence = [];
  const nextColor = colors[Math.floor(Math.random() * colors.length)];
  sequence.push(nextColor);
  playSequence();
}

// Play the current sequence
function playSequence() {
  sequence.forEach((color, index) => {
    setTimeout(() => {
      flashColor(color);
    }, (index + 1) * 1000);
  });
}

// Flash the color on the screen
function flashColor(color) {
  const button = document.getElementById(color);
  button.style.animation = `ajillah${colors.indexOf(color) + 1} 1s linear`;
  setTimeout(() => {
    button.style.animation = "none";
  }, 1000);
}

// Handle player input
function handlePlayerInput(color) {
  playerSequence.push(color);
  flashColor(color);
  checkPlayerInput();
}

// Check if the player's input is correct
function checkPlayerInput() {
  const currentIndex = playerSequence.length - 1;

  if (playerSequence[currentIndex] !== sequence[currentIndex]) {
    alert("Game Over! Try again.");
    startGame();
    return;
  }

  if (playerSequence.length === sequence.length) {
    setTimeout(nextLevel, 1000);
  }
}

// UI Creation Code
let rightTop = document.createElement("button");
rightTop.id = "rightTop";
let leftTop = document.createElement("button");
leftTop.id = "leftTop";
let rightBottom = document.createElement("button");
rightBottom.id = "rightBottom";
let leftBottom = document.createElement("button");
leftBottom.id = "leftBottom";

[rightTop, leftTop, rightBottom, leftBottom].forEach((button) => {
  button.className = "color-button";
  document.getElementById("mainContain").appendChild(button);
});

let midCircle = document.createElement("div");
midCircle.id = "midCircle";

let midCircleTitle = document.createElement("h2");
midCircleTitle.id = "midCircle_garchig";
midCircleTitle.innerHTML = "Simon";

let startButton = document.createElement("button");
startButton.id = "midCircle_dund";
startButton.innerHTML = "Start";

midCircle.append(midCircleTitle, startButton);
document.getElementById("mainContain").appendChild(midCircle);

// Set up event listeners
startButton.addEventListener("click", startGame);
document.querySelectorAll(".color-button").forEach((button) => {
  button.addEventListener("click", () => {
    handlePlayerInput(button.id);
  });
});
