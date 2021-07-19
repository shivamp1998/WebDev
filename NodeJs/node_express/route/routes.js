const express = require("express");
const bodyParser  = require("body-parser");


const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
dishRouter.route('/')

.all((req,res,next)=> {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req,res,next) => {
  res.end("Will send all the dishes to you!");
})
.post((req,res,next) => {
  res.end("Will update the dish");
})
.put((req,res,next)=> {
  res.statusCode = 403;
  res.end("not supported");
});

module.exports = dishRouter;
