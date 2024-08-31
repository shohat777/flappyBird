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
var topWall2 = document.getElementById("topWall2");
var bottomWall2 = document.getElementById("bottomWall2");

function randomGapPosition2() {
  gapPositionY = Math.random() * (wrapperHeight - gapHeight);
  topWall2.style.height = gapPositionY + "px";
  bottomWall2.style.height = wrapperHeight - gapPositionY - gapHeight + "px";
}

function moveWalls2() {
  var wallX = window.innerWidth - wallWidth;
  var interval = setInterval(function () {
    wallX -= wallSpeed;

    if (wallX < -wallWidth) {
      wallX = window.innerWidth;
      randomGapPosition2();
    }

    topWall2.style.left = wallX - 370 + "px";
    bottomWall2.style.left = wallX - 370 + "px"; // checkCollision(wallX); add the function that Israel is working on if necessary.
  }, 15);
}

randomGapPosition2();
moveWalls2();