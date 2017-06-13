console.log('my canvans')

let canvas = document.querySelector('#canvas')
canvas.width  = 800;
canvas.height = 600;

let ctx = canvas.getContext('2d')

ctx.fillStyle='green'
ctx.fillRect(10,10,300,300)
ctx.strokeStyle='blue'
ctx.strokeRect(10, 10, 300, 300)

let img = new Image()
img.src='./html5_css3.jpg'

img.onload = function(){
	ctx.drawImage(img, 0,0, canvas.width,canvas.height)
}
