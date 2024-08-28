"use strict";

var bird = 90;
var isKeyPressed = false;
var wrapper = document.querySelector('wrapper');
wrapper.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    isKeyPressed = true;
    console.log("ttt");
  }
});
wrapper.addEventListener('keyup', function (event) {
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
}, 100);

function renderBird(bird) {
  var html = "<img src=\"https://img.tapimg.net/market/images/6ff8977f485174fed0e371f869516b64.png/appicon\" alt=\"\" \n    style=\"position: relative; top: " + bird + "vh ;\">";
  wrapper.innerHTML = html;
}