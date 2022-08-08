const http = require('http');
const url = require('url');
const fs = require('fs')

const server = http.createServer((req,res) => {
    const pathname = req.url;
    if(pathname === '/home') {
        res.end('HOME')
    }else if(pathname === '/overview') {
        res.end('Overview')
    }else if(pathname === '/api') {
        fs.readFile('./dev-data/data.json', (err,data) => {
            const parsedData = JSON.parse(data);
            console.log(parsedData);
            res.writeHead(200, {
                'Content-Type' : 'application/json'
            })
            res.end(data)
        })
    }else{
        res.writeHead(404, {
            'Content-Type' : 'text/html'
        });
        res.end('<h1>Not Found</h1>')
    }
});


server.listen(3000,() => {
    console.log(`Server Running on PORT 3000`)
}) 
