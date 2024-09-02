"use strict";

var topWall = document.querySelector('#topWall');
var bottomWall = document.querySelector('#bottomWall');
var topWall2 = document.querySelector('#topWall2');
var bottomWall2 = document.querySelector('#bottomWall2');
var img = document.querySelector('img');
var isColliding = false;
console.log(isColliding);

function isCollision(element1, element2) {
  var rect1 = element1.getBoundingClientRect();
  var rect2 = element2.getBoundingClientRect();
  return !(rect1.left > rect2.right || rect1.right < rect2.left || rect1.top > rect2.bottom || rect1.bottom < rect2.top);
}

function checkCollision() {
  var isCollidingWithTopWall = isCollision(topWall, img);
  var isCollidingWithBottomWall = isCollision(bottomWall, img);
  var isCollidingWithTopWall2 = isCollision(topWall2, img);
  var isCollidingWithBottomWall2 = isCollision(bottomWall2, img);

  if (isCollidingWithTopWall || isCollidingWithBottomWall || isCollidingWithTopWall2 || isCollidingWithBottomWall2) {
    console.log("kkk");
    isColliding = true;
    console.log(isColliding);
    img.style.top = "90vh";
  }

  if (!(isCollidingWithTopWall || isCollidingWithBottomWall || isCollidingWithTopWall2 || isCollidingWithBottomWall2)) ;
}

setInterval(checkCollision, 100);
var bird = 90;
var isKeyPressed = false;
var wrapper = document.querySelector('#wrapper');
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
setInterval(function () {
  if (isKeyPressed) {
    bird--;

    if (bird < 10) {
      bird = 10;
    }
  } else {
    bird++;

    if (bird > 90) {
      bird = 90;
    }
  }

  renderBird(bird);
}, 10);

function renderBird(bird) {
  // const img = document.querySelector('img') as HTMLImageElement;
  if (!isColliding) {
    img.style.top = bird + "vh";
  }
}