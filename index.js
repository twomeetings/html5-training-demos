import './index.css'

const startButton = document.querySelector('#btn_start')
const tableTarget = document.querySelector('#tableInfo')

startButton.addEventListener('click',()=>{
	console.log('clicked')

	const websockClient = new WebSocket("ws://localhost:7777");
	websockClient.onmessage = (event)=>{
		let result= JSON.parse(event.data);
		let tr= document.createElement("tr");
		Object.keys(result).forEach(e=>{
			let tempTd = document.createElement("td");
			tempTd.innerHTML = result[e]
			tr.appendChild(tempTd)
		})

		tableTarget.appendChild(tr)
	};
})
