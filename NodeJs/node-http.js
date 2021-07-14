const http = require("http");
const fs = require("fs");
const path = require('path');
const server = http.createServer((req,res)=> {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('content-type','text/html');
  res.end('<html><body><h1>Hello World</h1></body></html>');
});

server.listen(3000,'localhost',()=> {
  console.log(`server running`);
})
