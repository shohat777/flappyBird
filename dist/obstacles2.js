function randomGapPosition2() {
    gapPositionY = Math.random() * (wrapperHeight - gapHeight);
    topWall.style.height = gapPositionY + "px";
    bottomWall.style.height = wrapperHeight - gapPositionY - gapHeight + "px";
}
function moveWalls2() {
    var wallX = window.innerWidth - wallWidth;
    var interval = setInterval(function () {
        wallX -= wallSpeed;
        if (wallX < -wallWidth) {
            wallX = window.innerWidth;
            randomGapPosition();
        }
        topWall.style.left = wallX - 300 + "px";
        bottomWall.style.left = wallX - 300 + "px";
        // checkCollision(wallX); add the function that Israel is working on if necessary.
    }, 15);
}
randomGapPosition2();
moveWalls2();
