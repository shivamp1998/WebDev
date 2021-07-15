const express = require('express');
const http = require('http');
const app = express();


app.use(express.static(__dirname + "/public"));
app.use((req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end("<html><body><h1>This is express server </h1></body></html>");
})

const server = http.createServer(app);
server.listen(3000,()=>{
  console.log("Server Started at port 3000");
})
