var wallSpeed = 5;
var gapHeight = 250;
var wallWidth = 65;
var wrapperHeight = window.innerHeight;
var gapPositionY1 = 0;
var gapPositionY2 = 0;
var gapPositionY3 = 0;
function randomGapPosition(wrapperHeight, gapHeight) {
    return Math.random() * (wrapperHeight - gapHeight);
}
function moveWalls(topWall, bottomWall, wallOffset, gapPositionY) {
    if (wallOffset === void 0) { wallOffset = 0; }
    var wallX = window.innerWidth - wallWidth;
    var interval = setInterval(function () {
        wallX -= wallSpeed;
        if (wallX < -wallWidth) {
            wallX = window.innerWidth;
            gapPositionY = randomGapPosition(wrapperHeight, gapHeight);
            topWall.style.height = gapPositionY + "px";
            bottomWall.style.height = wrapperHeight - gapPositionY - gapHeight + "px";
        }
        topWall.style.left = wallX - wallOffset + "px";
        bottomWall.style.left = wallX - wallOffset + "px";
    }, 15);
}
var topWall1 = document.getElementById("topWall");
var bottomWall1 = document.getElementById("bottomWall");
var topWall2 = document.getElementById("topWall2");
var bottomWall2 = document.getElementById("bottomWall2");
var topWall3 = document.getElementById("topWall3");
var bottomWall3 = document.getElementById("bottomWall3");
// let wall1Interval = moveWalls(topWall1, bottomWall1, 0, gapPositionY1);
// let wall2Interval = moveWalls(topWall2, bottomWall2, -400, gapPositionY2);
// let wall3Interval = moveWalls(topWall3, bottomWall3, -800, gapPositionY3);
