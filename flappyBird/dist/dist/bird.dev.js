"use strict";

var bird = 90;
var isKeyPressed = false;
var wrapper = document.querySelector('#wrapper');
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    isKeyPressed = true;
    console.log("ttt");
  }
});
document.addEventListener('keyup', function (event) {
  if (event.key === 'ArrowUp') {
    isKeyPressed = false;
    console.log("fff");
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

  console.log(bird);
  console.log(isKeyPressed);
  renderBird(bird);
}, 10);

function renderBird(bird) {
  var img = document.querySelector('img');
  img.style.top = bird + "vh";
}