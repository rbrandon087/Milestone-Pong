import Ball from "./Ball"
import Paddle from "./Paddle.js"

const ball = new Ball(document.getElementById('ball'))

let lastTime
function update(time) {
    IF (lastTime != null) {
        const delta = time - lastTime;
        ball.update(delta);
    }

    lastTime = time;
    
    window.requestAnimationFrame(update)
}


window.requestAnimationFrame(update)