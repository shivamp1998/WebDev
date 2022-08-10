const EventEmitter = require('events');
const http = require('http');





class Sales extends EventEmitter {
    constructor() {
        super();
    }
}
const myEmitter = new Sales();
myEmitter.on('newSale', (product) => {
    console.log(`There are ${product} items left in stock`);
})

myEmitter.on('newSale', () => {
    console.log('There was a new sale');
})


myEmitter.emit('newSale');
myEmitter.emit('newSale',9);

const server = http.createServer();

server.on('request', (req,res) => {
    console.log('Request Receievd');
})


server.on('close', () => {
    console.log('server Closed')
})

server.listen(3001, () => {
    console.log('Waiting for request....');
})