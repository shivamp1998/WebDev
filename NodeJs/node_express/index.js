const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));


app.listen(3000,()=> {
  console.log("Server Created");
})
