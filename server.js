const WebSocket = require('ws')

const wss = new WebSocket.Server({port:7777})
const liveMatchInfo = [
	{time:'12:00', team:'勇士', detail:'帕楚里亚和特里斯坦-汤普森跳球, 德雷蒙德-格林得到篮球',records:'0-0'},
	{time:'11:42', team:'勇士', detail:'杜兰特17英尺外跳投不中',records:'0-0'},
	{time:'11:42', team:'骑士', detail:'JR-史密斯拿到后场篮板',records:'0-0'},
	{time:'11:33', team:'勇士', detail:'詹姆斯带球上篮得分',records:'2-0'},
	{time:'11:23', team:'勇士', detail:'库里助攻德雷蒙德-格林，27英尺外急停跳投三分入网',records:'2-3'},
	{time:'11:12', team:'骑士', detail:'乐福接到詹姆斯的助攻，转身勾手命中',records:'4-3'},
	{time:'11:12', team:'勇士', detail:'杜兰特在对方投篮时犯规 (乐福造成了犯规)',records:'4-3'},
	{time:'11:12', team:'勇士', detail:'乐福加罚命中',records:'5-3'}
]

wss.on('connection', (ws)=>{
	ws.on('message', function incoming(data){
		console.log('--- data:',data)
		ws.send(Date.now());
	})

	let i = 0
	let timer = setInterval(()=>{
		const currIndex = i++ % liveMatchInfo.length
		ws.send(JSON.stringify(liveMatchInfo[currIndex]))
	}, 3000)

	ws.on('close', function close(){
		clearInterval(timer)
		console.log('--- ws close')
	})

	console.log('wss connected')
})
