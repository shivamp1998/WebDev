const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req,res) => {
    // fs.readFile('./test-file.txt','utf-8',(err,data) => {
    //     console.log(data);
    // })


    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // })
    // readable.on('end', () => {
    //     res.end();
    // })
    // readable.on('error', () => {
    //     res.statusCode(500);
    //     res.end('File Not found')
    // })

    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    
     
})

server.listen(3002,() => {
    console.log('Server Started on Port');
})

