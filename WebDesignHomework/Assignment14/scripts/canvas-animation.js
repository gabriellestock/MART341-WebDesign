const canvas = document.getElementById('canvasAnimation');
const ctx = canvas.getContext('2d');

let x = 0;
let y = canvas.height / 2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    ctx.fillStyle = '#3498db';
    ctx.fill();
    x += 5;
    if (x > canvas.width) x = 0;
    requestAnimationFrame(draw);
}

draw();
