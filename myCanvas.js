console.log('my canvans')

let canvas = document.querySelector('#canvas')
canvas.width  = 800;
canvas.height = 600;

let ctx = canvas.getContext('2d')

ctx.fillStyle='green'
ctx.fillRect(10,10,300,300)
ctx.strokeStyle='blue'
ctx.strokeRect(10, 10, 300, 300)
