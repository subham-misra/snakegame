var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var snakeW = 10;
var snakeH = 10;
var dir="right";

function drawSnake(x, y) {
    ctx.fillStyle = "white";
    ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH)
    ctx.fillStyle = "black";
    ctx.strokeRect(x * snakeW, y * snakeH, snakeW, snakeH)
}


var len = 4;
snake = [];
for (var i = len - 1; i >= 0; i--) {
    snake.push({
        x: i,
        y: 0
    })
}

document.addEventListener("keydown",dirContral)
function dirContral(e) {
    if (e.keyCode == 37) {
        dir = "left";
    } if (e.keyCode == 38) {
        dir = "up";
    } if (e.keyCode == 39) {
        dir = "right";
    } else if (e.keyCode == 40) {
        dir = "down";
    }
}
var food = {
    x: Math.round(Math.random() * (cvs.width / snakeW) + 1),
    y: Math.round(Math.random() * (cvs.height / snakeH) + 1)
}


function drawFood(x, y) {
    ctx.fillStyle = "red";
    ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH)
    ctx.fillStyle = "black";
    ctx.strokeRect(x * snakeW, y * snakeH, snakeW, snakeH)
}


function draw() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    drawFood(food.x, food.y);
    for (var i = 0; i < snake.length; i++) {
        var X = snake[i].x;
        var Y = snake[i].y;
        drawSnake(X, Y)
    }
    var snakeX = snake[0].x
    var snakeY = snake[0].y

    if(dir=="right"){snakeX++}
    else if(dir=="left"){snakeX--}
     else if(dir=="up"){snakeY--}
     else if(dir=="down"){snakeY++}

    if (snakeX == food.x && snakeY == food.y) {
        food = {
            x: Math.round(Math.random() * (cvs.width / snakeW) + 1),
            y: Math.round(Math.random() * (cvs.height / snakeH) + 1)
        }
        var newHead = {
            x: snakeX,
            y: snakeY
        }

    } else {
        

        snake.pop();
        var newHead = {
            x: snakeX,
            y: snakeY
        }
    }
        snake.unshift(newHead);
}
    setInterval(draw, 100)








