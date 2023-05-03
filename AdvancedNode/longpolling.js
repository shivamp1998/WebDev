const express = require('express');
const app = express();

const DELAY = 1000;
const PORT = 5000;

let connections = [];

let tick = 0;
setInterval(() => {
    connections.map((res) => {
        res.write(`<h1> Hi this tick is working ${tick++}`)
    })
    connections = []
}, DELAY)

app.get('/', (req,res) => {
    console.log('hitting on this route')
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Transfer-Encoding', 'chunked');
    connections.push(res);
})

app.listen(PORT, () => {
    console.log(`listening on Port : ${PORT}`);
})





