var currentState = "start";
var collisionCount = 0;
var maxCollisions = 3;
window.addEventListener("DOMContentLoaded", function () {
    var startPage = document.getElementById("startPage");
    var gamePage = document.getElementById("gamePage");
    var gameOverPage = document.getElementById("gameOverPage");
    var startButton = document.getElementById("startButton");
    var restartButton = document.getElementById("restartButton");
    var collisionCountDisplay = document.getElementById("collisionCount");
    function render() {
        if (currentState === "start") {
            startPage.style.display = "block";
            gamePage.style.display = "none";
            gameOverPage.style.display = "none";
        }
        else if (currentState === "playing") {
            startPage.style.display = "none";
            gamePage.style.display = "block";
            gameOverPage.style.display = "none";
        }
        else if (currentState === "gameOver") {
            startPage.style.display = "none";
            gamePage.style.display = "none";
            gameOverPage.style.display = "block";
        }
    }
    startButton.addEventListener("click", function () {
        currentState = "playing";
        render();
        startGame();
    });
    restartButton.addEventListener("click", function () {
        currentState = "start";
        restartGame();
        render();
    });
    function startGame() {
        collisionCount = 0;
        collisionCountDisplay.textContent = collisionCount.toString();
    }
    function restartGame() {
        collisionCount = 0;
        collisionCountDisplay.textContent = collisionCount.toString();
    }
    function checkCollision() {
        collisionCount++;
        collisionCountDisplay.textContent = collisionCount.toString();
        if (collisionCount >= maxCollisions) {
            currentState = "gameOver";
            // Additional logic to stop the game (e.g., stop moving walls, stop bird movement, etc.)
        }
    }
    function gameOver() {
        currentState = "gameOver";
        render();
    }
    render(); //initial render to show the start page
});
