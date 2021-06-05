const snake = document.querySelector('.moving');
const board = document.querySelector('.board');
const firstBlock = document.querySelector('.player');
snake.setAttribute('style', 'left:0px; top:300px;');
let key = 0; // variable that contains string from event object about pressed key
let addPosleft = 0; // variable with starting left position
let addPosTop = 300; // variable with starting top position
let speed = 15 // speed variable 
let addonPos = 0;
let deg = 0;



//Player Control System
window.addEventListener('load', (e, addons) => {
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
            if (key == 'ArrowRight') {
                addPosleft += speed, snake.style.left = addPosleft + 'px';
                snake.style.transform = `rotate(0deg)`;
            } else if (key == 'ArrowDown') {
                addPosTop += speed,
                    snake.style.top = addPosTop + 'px',
                    snake.style.transform = `rotate(90deg)`;
            } else if (key == 'ArrowUp') {
                addPosTop -= speed, snake.style.top = addPosTop + 'px';
                snake.style.transform = `rotate(270deg)`;
            } else if (key == 'ArrowLeft') {
                addPosleft -= speed, snake.style.left = addPosleft + 'px';
                snake.style.transform = `rotate(180deg)`;
            }
        }
    }, 100)
})

// generating and adding snake points to the board

function generate() {
    let randomPosLeft = Math.floor(Math.random() * 950)
    let randomPosTop = Math.floor(Math.random() * 590);
    const newPoint = document.createElement('div')
    newPoint.classList.add('point');
    newPoint.style.left = randomPosLeft + 'px';
    newPoint.style.top = randomPosTop + 'px';
    board.append(newPoint)
    setTimeout(() => {
        ColisionDetection(randomPosLeft, randomPosTop, newPoint);
    }, 1000)
}


function ColisionDetection(PointLeft, PointTop, point) {
    setInterval(() => {
        let LeftDiff = addPosleft - PointLeft;
        let TopDiff = addPosTop - PointTop;

        if ((LeftDiff < 40 && LeftDiff > -40) && (TopDiff < 40 && TopDiff > -40)) {
            board.removeChild(point)
            generate();
            addSnakeSize();
        }
    }, 100);

}


function addSnakeSize() {
    let addon = document.createElement('div');
    addon.classList.add('addon');
    addonPos += 40
    addon.style.left = -addonPos + 'px';
    document.querySelector('.moving').appendChild(addon);
    console.clear();

}
generate();