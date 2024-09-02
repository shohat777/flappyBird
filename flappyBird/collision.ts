const topWall = document.querySelector('#topWall') as HTMLDivElement;
const bottomWall = document.querySelector('#bottomWall') as HTMLDivElement;
const topWall2 = document.querySelector('#topWall2') as HTMLDivElement;
const bottomWall2 = document.querySelector('#bottomWall2') as HTMLDivElement;
const img = document.querySelector('img') as HTMLImageElement;

let isColliding = false;
console.log(isColliding);


function isCollision(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(rect1.left > rect2.right || rect1.right < rect2.left || rect1.top > rect2.bottom || rect1.bottom < rect2.top);

}

function checkCollision() {
    const isCollidingWithTopWall = isCollision(topWall, img);
    const isCollidingWithBottomWall = isCollision(bottomWall, img);
    const isCollidingWithTopWall2 = isCollision(topWall2, img);
    const isCollidingWithBottomWall2 = isCollision(bottomWall2, img);

    if (isCollidingWithTopWall || isCollidingWithBottomWall || isCollidingWithTopWall2 || isCollidingWithBottomWall2) {

        console.log("kkk");
        isColliding = true;
        console.log(isColliding);
        
        img.style.top = "90vh";

    } if!(isCollidingWithTopWall || isCollidingWithBottomWall || isCollidingWithTopWall2 || isCollidingWithBottomWall2)

}




setInterval(checkCollision, 100);

let bird: number = 90;
let isKeyPressed: boolean = false;

const wrapper = document.querySelector('#wrapper') as HTMLDivElement;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        isKeyPressed = true;



    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp') {
        isKeyPressed = false;



    }
});


setInterval(() => {
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


    renderBird(bird);
}, 10);






function renderBird(bird: number) {
    // const img = document.querySelector('img') as HTMLImageElement;
    if (!isColliding) {
        img.style.top = bird + "vh";
    }



}