const main = document.querySelector("main");
const btn = document.querySelector("button");
const timer = document.querySelector("#timer");
const score = document.querySelector("#score");
const overlay = document.querySelector("#overlay");

const box = document.createElement("div");

box.classList.add("box");

let time = 0;
let getScore = 0;
let interval;
let gameRunning = false;

// Create Restart Button Through JS
const restartBtn = document.createElement("button");

restartBtn.textContent = "Restart";
restartBtn.style.display = "none";

document.body.append(restartBtn);

// To Generate Random Color in Box
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

// To Put a BOX into Random Place
function randomBox() {
    
  box.style.backgroundColor = randomColor();

  main.append(box);

  let mainH = main.clientHeight - box.offsetHeight;
  let mainW = main.clientWidth - box.offsetWidth;

  const rY = Math.random() * mainH;
  const rX = Math.random() * mainW;

  box.style.top = `${rY}px`;
  box.style.left = `${rX}px`;
}

// Start Game Function
function startGame() {

  if (gameRunning) return;

  gameRunning = true;

  clearInterval(interval);

  interval = setInterval(() => {

    randomBox();

    time += 1;

    timer.textContent = time;

  }, 1000);

  // Stop Game After 10 Seconds
  setTimeout(() => {

    clearInterval(interval);

    gameRunning = false;

    overlay.style.display = "flex";

    // Show Overlay For 3 Seconds
    setTimeout(() => {

      overlay.style.display = "none";

      restartBtn.style.display = "block";

    }, 2000);

  }, 10000);
}

// Work When User Click On Start Button
btn.addEventListener("click", () => {

  btn.style.display = "none";

  startGame();

});

// For Getting a Score
box.addEventListener("click", () => {

  if (!gameRunning) return;

  getScore += 1;

  score.textContent = getScore;

  // Move Box Immediately After Click
  randomBox();

});

// Restart Game
restartBtn.addEventListener("click", () => {

  // Reset Values
  time = 0;
  getScore = 0;

  timer.textContent = 0;
  score.textContent = 0;

  restartBtn.style.display = "none";

  startGame();

});