const snake = document.querySelector('.player');
const board = document.querySelector('.board');
let key = 0; // variable that contains string from event object about pressed key
let addPosleft = 0; // variable with starting left position
let addPosTop = 300; // variable with starting top position
let speed = 15 // speed variable 


//Player Control System
window.addEventListener('load', (e) => {
    snake.setAttribute('style', 'left:0px; top:300px;');
    window.addEventListener('keydown', (e) => {
        key = e.key
    })
    setInterval(() => {
        if (snake.style.left > 960 + 'px') {
            snake.style.left = 0 + 'px';
            addPosleft = 0;
        } else if (snake.style.left < 0 + 'px') {
            snake.style.left = 950 + 'px';
            addPosleft = 950;
        } else if (snake.style.top < 0 + 'px') {
            snake.style.top = 580 + 'px'
            addPosTop = 580;
        } else if (snake.style.top == 600 + 'px') {
            snake.style.top = 0 + "px";
            addPosTop = 0;
        } else {
            if (key == 'ArrowRight') addPosleft += speed, snake.style.left = addPosleft + 'px';
            else if (key == 'ArrowDown') addPosTop += speed, snake.style.top = addPosTop + 'px';
            else if (key == 'ArrowUp') addPosTop -= speed, snake.style.top = addPosTop + 'px';
            else if (key == 'ArrowLeft') addPosleft -= speed, snake.style.left = addPosleft + 'px';
        }
    }, 100)
})

// generating and adding snake points

function generate() {
    const places = document.querySelectorAll('.p');
    let randomNum = Math.floor(Math.random() * 6);
    const newPoint = document.createElement('div')
    newPoint.classList.add('point');
    if (places[randomNum].contains(newPoint)) {

    } else {
        places[randomNum].append(newPoint);
        console.log(newPoint.style.top);
    }

}
generate();