const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use((req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end("<html><body><h1>This is express server </h1></body></html>");
})


app.all('/dishes',(req,res,next)=> {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
});
app.get('/dishes',(req,res,next) => {
  res.end("Will send all the dishes to you!");
});
app.post('/dishes',(req,res,next) => {
  res.end("Will update the dish");
});
app.put('/dishes',(req,res,next)=> {
  res.statusCode = 403;
  res.end("not supported");
});

const server = http.createServer(app);
server.listen(3000,()=>{
  console.log("Server Started at port 3000!");
})
