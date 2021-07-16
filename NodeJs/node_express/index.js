const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use((req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end("<html><body><h1>This is express server </h1></body></html>");
})


app.all('/dishes',(req,res,next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
});
app.get('/dishes',(req,res)=> {
  res.end(" Will send all the dishes to you?");
})
const server = http.createServer(app);
server.listen(3000,()=>{
  console.log("Server Started at port 3000!");
})
