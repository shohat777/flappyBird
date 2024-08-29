const topWall = document.getElementById("topWall") as HTMLElement;
const bottomWall = document.getElementById("bottomWall") as HTMLElement;

const wallSpeed = 5;
const gapHeight = 250;
const wallWidth = 65;
let wrapperHeight = window.innerHeight;
let gapPositionY = 0;

function randomGapPosition() {
  gapPositionY = Math.random() * (wrapperHeight - gapHeight);
  topWall.style.height = `${gapPositionY}px`;
  bottomWall.style.height = `${wrapperHeight - gapPositionY - gapHeight}px`;
}

function moveWalls() {
  let wallX = window.innerWidth - wallWidth;
  const interval = setInterval(() => {
    wallX -= wallSpeed;
    if (wallX < -wallWidth) {
      wallX = window.innerWidth;
      randomGapPosition();
    }
    topWall.style.left = `${wallX}px`;
    bottomWall.style.left = `${wallX}px`;

    // checkCollision(wallX); add the function that Israel is working on if necessary.
  }, 15);
}

randomGapPosition();
moveWalls();

const topWall2 = document.getElementById("topWall2") as HTMLElement;
const bottomWall2 = document.getElementById("bottomWall2") as HTMLElement;

function randomGapPosition2() {
  gapPositionY = Math.random() * (wrapperHeight - gapHeight);
  topWall2.style.height = `${gapPositionY}px`;
  bottomWall2.style.height = `${wrapperHeight - gapPositionY - gapHeight}px`;
}

function moveWalls2() {
  let wallX = window.innerWidth - wallWidth;
  const interval = setInterval(() => {
    wallX -= wallSpeed;
    if (wallX < -wallWidth) {
      wallX = window.innerWidth;
      randomGapPosition2();
    }
    topWall2.style.left = `${wallX-370 }px`;
    bottomWall2.style.left = `${wallX-370 }px`;

    // checkCollision(wallX); add the function that Israel is working on if necessary.
  }, 15);
}

randomGapPosition2();
moveWalls2();
