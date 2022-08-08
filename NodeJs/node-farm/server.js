const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req)
    res.end("Hello From Server");
});


server.listen(3000,() => {
    console.log(`Server Running on PORT 3000`)
}) 
