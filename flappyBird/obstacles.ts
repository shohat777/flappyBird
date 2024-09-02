const wallSpeed = 5;
const gapHeight = 250;
const wallWidth = 65;
const wrapperHeight = window.innerHeight;

let gapPositionY1 = 0;
let gapPositionY2 = 0;
let gapPositionY3 = 0;

function randomGapPosition(wrapperHeight: number, gapHeight: number): number {
  return Math.random() * (wrapperHeight - gapHeight);
}

function moveWalls(
  topWall: HTMLElement,
  bottomWall: HTMLElement,
  wallOffset: number = 0,
  gapPositionY: number
) {
  let wallX = window.innerWidth - wallWidth;
  const interval = setInterval(() => {
    wallX -= wallSpeed;
    if (wallX < -wallWidth) {
      wallX = window.innerWidth;
      gapPositionY = randomGapPosition(wrapperHeight, gapHeight);
      topWall.style.height = `${gapPositionY}px`;
      bottomWall.style.height = `${wrapperHeight - gapPositionY - gapHeight}px`;
    }
    topWall.style.left = `${wallX - wallOffset}px`;
    bottomWall.style.left = `${wallX - wallOffset}px`;

  }, 15);

}

const topWall1 = document.getElementById("topWall") as HTMLElement;
const bottomWall1 = document.getElementById("bottomWall") as HTMLElement;
const topWall2 = document.getElementById("topWall2") as HTMLElement;
const bottomWall2 = document.getElementById("bottomWall2") as HTMLElement;
const topWall3 = document.getElementById("topWall3") as HTMLElement;
const bottomWall3 = document.getElementById("bottomWall3") as HTMLElement;

// let wall1Interval = moveWalls(topWall1, bottomWall1, 0, gapPositionY1);
// let wall2Interval = moveWalls(topWall2, bottomWall2, -400, gapPositionY2);
// let wall3Interval = moveWalls(topWall3, bottomWall3, -800, gapPositionY3);
