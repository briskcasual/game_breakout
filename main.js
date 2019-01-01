
var container = document.getElementById('gamearea'),
canvas = document.createElement('canvas'),
ctx = canvas.getContext('2d');

container.appendChild(canvas);

canvas.width = 320;
canvas.height = 240;

ctx.fillStyle='#000000';
ctx.fillRect(0,0,320,240);

