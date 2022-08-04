const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

ctx.fillRect(200, 200, 25, 100);
ctx.fillRect(400, 200, 25, 100);
ctx.fillRect(300, 250, 25, 50);
ctx.fillRect(200, 150, 225, 50);
ctx.moveTo(200, 150);
ctx.lineTo(310, 100);
ctx.lineTo(426, 150);
ctx.fill();
