const {createClient} = require('redis');
const client = createClient({
    url: 'redis://127:0:0:1:6379'
});

client.on('error', (err) => {
    console.log("some error occurred while connecting redis", err);
})

client.connect()
.then((conn) => {
    console.log('connected redis')
});

module.export =  client;