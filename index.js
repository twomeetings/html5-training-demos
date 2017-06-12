import './index.css'

const btn = document.querySelector('#btn')
const popup = document.querySelector('#divWithTriangle')

btn.addEventListener('click',()=>{
	popup.style.display = popup.style.display ==='block'?'none':'block'
})
