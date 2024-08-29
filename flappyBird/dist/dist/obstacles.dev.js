"use strict";

var topWall = document.getElementById("topWall");
var bottomWall = document.getElementById("bottomWall");
var wallSpeed = 5;
var gapHeight = 250;
var wallWidth = 65;
var wrapperHeight = window.innerHeight;
var gapPositionY = 0;

function randomGapPosition() {
  gapPositionY = Math.random() * (wrapperHeight - gapHeight);
  topWall.style.height = gapPositionY + "px";
  bottomWall.style.height = wrapperHeight - gapPositionY - gapHeight + "px";
}

function moveWalls() {
  var wallX = window.innerWidth - wallWidth;
  var interval = setInterval(function () {
    wallX -= wallSpeed;

    if (wallX < -wallWidth) {
      wallX = window.innerWidth;
      randomGapPosition();
    }

    topWall.style.left = wallX + "px";
    bottomWall.style.left = wallX + "px"; // checkCollision(wallX); add the function that Israel is working on if necessary.
  }, 15);
}

randomGapPosition();
moveWalls();
