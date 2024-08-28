let bird:number = 90;
let isKeyPressed: boolean = false;

const wrapper = document.querySelector('#wrapper') as HTMLDivElement;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        isKeyPressed = true;
        console.log("ttt");
        

    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp') {
        isKeyPressed = false;
        console.log("fff");
        

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
    } console.log(bird);
    console.log(isKeyPressed);
    
    
    renderBird(bird);
},10);






function renderBird(bird:number) {
    const img = document.querySelector('img') as HTMLImageElement;
    img.style.top = bird + "vh";

    

}