import Ball from "./Ball"
import Paddle from "./Paddle.js"

const ball = new Ball(document.getElementById('ball'))
const playerPaddle = new Paddle(document.getElementById('player-Paddle'))
const computerPaddle = new Paddle(document.getElementById('computer-Paddle'))

let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime;
        ball.update(delta);
        computerPaddle.update(delta, ball.y);

        if (isLose()) {
            
        }
    }

    lastTime = time;
    
    window.requestAnimationFrame(update)
}


document.addEventListener("mousemove" , e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100;
})

window.requestAnimationFrame(update)