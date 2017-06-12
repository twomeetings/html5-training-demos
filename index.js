import './index.css'

const top=document.querySelector('#top')
const innerTop=document.querySelector('#innerTop')
const bottom = document.querySelector('#bottom')
const innerBottom = document.querySelector('#innerBottom')

top.addEventListener('click',function(){
	console.log('top is clicked')
})

innerTop.addEventListener('click',function(){
	console.log('innerTop is clicked')
})

bottom.addEventListener('click',function(){
	console.log('bottom is clicked')
}, true)

innerBottom.addEventListener('click',function(){
	console.log('innerBottom is clicked')
}, true)
