const webSocket = require('ws');


const wss = new webSocket.Server({
    port : 5555
})


wss.on('connection', (ws) => {
    console.log('web socket connected')
    ws.on('message', (data) => {
        wss.clients.forEach((client) => {
            if(client.readyState === webSocket.OPEN) {
                client.send(data.toString())
            }
        })
    })
});




