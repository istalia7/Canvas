let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  // votre code
  if (canvas.getContext) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall(); // callback

    // rebond haut et bas
    if (y + dy < 0 || y + dy > canvas.height) {
      dy = -dy;
    }

    if (x + dx < 0 || x + dx > canvas.width) {
      dx = -dx;
    }

    x += dx; // x = x + dx
    y += dy; // y = y + dy
    // console.log(x);
  }
}

setInterval(draw, 50);

// setTimeout(draw, 200);
