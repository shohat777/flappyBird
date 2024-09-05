"use strict";

var _a;

var currentState = "ready"; // Initial game state

var isColliding = false;
var bird = 90;
var isKeyPressed = false;
var topWall = document.querySelector('#topWall');
var bottomWall = document.querySelector('#bottomWall');
var topWall2 = document.querySelector('#topWall2');
var bottomWall2 = document.querySelector('#bottomWall2');
var img = document.querySelector('img');
console.log(isColliding);

function isCollision(element1, element2) {
  var rect1 = element1.getBoundingClientRect();
  var rect2 = element2.getBoundingClientRect();
  return !(rect1.left > rect2.right || rect1.right < rect2.left || rect1.top > rect2.bottom || rect1.bottom < rect2.top);
}

function checkCollision() {
  if (currentState !== "playing") return; // Prevent collision checking unless the game is playing

  var isCollidingWithTopWall = isCollision(topWall, img);
  var isCollidingWithBottomWall = isCollision(bottomWall, img);
  var isCollidingWithTopWall2 = isCollision(topWall2, img);
  var isCollidingWithBottomWall2 = isCollision(bottomWall2, img);

  if (isCollidingWithTopWall || isCollidingWithBottomWall || isCollidingWithTopWall2 || isCollidingWithBottomWall2) {
    console.log("Collision detected");
    isColliding = true;
    img.style.top = "90vh"; // Move the bird to a default position after collision
  } else {
    isColliding = false; // Reset the collision flag when no collisions are detected
  }
}

setInterval(checkCollision, 100);
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    isKeyPressed = true;
  }
});
document.addEventListener('keyup', function (event) {
  if (event.key === 'ArrowUp') {
    isKeyPressed = false;
  }
});

function renderBird(bird) {
  if (!isColliding) {
    img.style.top = bird + "vh";
  }
}

setInterval(function () {
  if (currentState !== "playing") return; // Prevent bird movement unless the game is playing

  if (isKeyPressed) {
    bird--;
    if (bird < 10) bird = 10;
  } else {
    bird++;
    if (bird > 90) bird = 90;
  }

  renderBird(bird);
}, 10); // Function to start the game

function startGame() {
  currentState = "playing"; // Set game state to 'playing'

  bird = 90; // Reset bird position

  isColliding = false; // Reset collision flag

  console.log("Game started!");
} // Example: Start the game by calling `startGame()`
// You can trigger this function through a button click or some other event.


(_a = document.querySelector('#startButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', startGame);