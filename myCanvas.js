console.log('mycanvans!')

let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

ctx.fillStyle='green'
ctx.fillRect(10,10,100,100)

ctx.strokeStyle='blue'
ctx.strokeRect(10, 10, 100, 100)
