var wallSpeed = 5;
var gapHeight = 250;
var wallWidth = 65;
var wrapperHeight = window.innerHeight;
function randomGapPosition(wrapperHeight, gapHeight) {
    return Math.random() * (wrapperHeight - gapHeight);
}
function moveWalls(topWall, bottomWall, wallOffset) {
    if (wallOffset === void 0) { wallOffset = 0; }
    var gapPositionY = randomGapPosition(wrapperHeight, gapHeight);
    topWall.style.height = gapPositionY + "px";
    bottomWall.style.height = wrapperHeight - gapPositionY - gapHeight + "px";
    var wallX = window.innerWidth - wallWidth + wallOffset;
    var interval = setInterval(function () {
        wallX -= wallSpeed;
        if (wallX < -wallWidth) {
            wallX = window.innerWidth;
            gapPositionY = randomGapPosition(wrapperHeight, gapHeight);
            topWall.style.height = gapPositionY + "px";
            bottomWall.style.height = wrapperHeight - gapPositionY - gapHeight + "px";
        }
        topWall.style.left = wallX + "px";
        bottomWall.style.left = wallX + "px";
    }, 15);
}
var topWall1 = document.getElementById("topWall");
var bottomWall1 = document.getElementById("bottomWall");
var topWall2 = document.getElementById("topWall2");
var bottomWall2 = document.getElementById("bottomWall2");
var topWall3 = document.getElementById("topWall3");
var bottomWall3 = document.getElementById("bottomWall3");
moveWalls(topWall1, bottomWall1, 0);
moveWalls(topWall2, bottomWall2, -400);
moveWalls(topWall3, bottomWall3, -800);
