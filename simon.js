// ****************** togloomiin css n enees ehlene **************
// Тоглоомын үндсэн container
const gameContainer = document.getElementById("game-container");
// Дүрснүүдийн мэдээлэл
const animals = [
  {
    id: "rigth-top",
    key: "4",
    name: "dove",
    sound: "voilin-music",
    image: "dove.png",
    x: 40,
    y: 35,
  },
  {
    id: "left-top",
    key: "3",
    name: "rabbit",
    sound: "guitar.mp3",
    image: "rabbit1.gif",
    x: 40,
    y: 45,
  },
  {
    id: "rigth-bottom",
    key: "2",
    name: "monkey",
    sound: "piano.mp3",
    image: "monkey.gif",
    x: 40,
    y: 55,
  },
  {
    id: "left-bottom",
    key: "1",
    name: "elephant",
    sound: "cultue.mp3",
    image: "elephant.png",
    x: 40,
    y: 65,
  },
];
// let idarray=["right-top","left-top","right-bottom","left-bottom"]
// Дүрснүүдийг үүсгэж, байрлуулах функц
// function createAnimals() {
animals.forEach((animal) => {
  // Animal wrapper
  const animalDiv = document.createElement("button");
  animalDiv.classList.add("animal");
  animalDiv.style.left = `${animal.x}%`;
  animalDiv.style.top = `${animal.y}%`;
  // Зураг нэмэх
  const img = document.createElement("img");
  img.src = animal.image;
  img.alt = animal.name;
  animalDiv.id = animal.id;
  animalDiv.appendChild(img);
  gameContainer.appendChild(animalDiv);
});
baruundeed = document.getElementById("rigth-top");
zuundeed = document.getElementById("left-top");
baruundood = document.getElementById("rigth-bottom");
zuundood = document.getElementById("left-bottom");
const buttonArray = [baruundeed, zuundeed, zuundood, baruundood];

// start button iin id bolon neej ogow
const startButton = document.createElement("button");
startButton.className = "startButton";
startButton.textContent = "START";
gameContainer.appendChild(startButton);
const numberSpan = document.createElement("span");
numberSpan.className = "number";
numberSpan.textContent = "0";
const topControls = document.createElement("div");
topControls.className = "top-controls";

const scoreDiv = document.createElement("div");
scoreDiv.className = "score";

const soundButton = document.createElement("div");
soundButton.className = "circle-button sound-button";

const soundIcon = document.createElement("img");
soundIcon.src = "soundicon.png";
soundIcon.alt = "sound"; //sound hiih ystoi

soundButton.appendChild(soundIcon);

const closeButton = document.createElement("div");
closeButton.className = "circle-button close-button";

const closeIcon = document.createElement("img");
closeIcon.src = "closeicon.png";
closeIcon.alt = "Close";

closeButton.appendChild(closeIcon);

const soundClose = document.createElement("div");
soundClose.className = "soundClose";
soundClose.appendChild(soundButton);
soundClose.appendChild(closeButton);

const noteSpan = document.createElement("span");
noteSpan.className = "note";
noteSpan.innerHTML = "&#9835;"; // Нот дүрс

scoreDiv.appendChild(noteSpan);
scoreDiv.appendChild(numberSpan);
topControls.appendChild(soundClose);
topControls.appendChild(scoreDiv);
gameContainer.appendChild(topControls);

//*****************togloomiin css n duussan  */

// togloomiin ajillah functionii bichiglel uunees ehelsen

// Initialize variables
let sequence = [];
let playerSequence = [];
let level = 0;

const colors = ["left-top", "rigth-top", "left-bottom", "rigth-bottom"];

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
  numberSpan.innerHTML = level;
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
  button.style.animation = "ajillah 1s linear";
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

startButton.addEventListener("click", startGame);
document.querySelectorAll(".animal").forEach((button) => {
  button.addEventListener("click", () => {
    handlePlayerInput(button.id);
  });
});

function playButtonSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play();
}
document.querySelectorAll(".animal").forEach((button) => {
  const animal = animals.find((a) => a.id === button.id);

  if (animal && animal.sound) {
    button.addEventListener("click", () => {
      playButtonSound(animal.sound);
    });
  }
});
