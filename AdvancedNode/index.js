const cluster = require("cluster");

if (cluster.isMaster) {
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
  const express = require("express");
  const app = express();

  function doWork(duration) {
    let start = Date.now();
    while(Date.now() - start  < duration) {}
  }

  app.get("/", (req, res, next) => {
    doWork(5000)
    res.end("<h1> Hello World </h1>");
  });

  app.get('/fast', (req,res,next) => {
    res.send('<h1> This was Fast </h1>')
  })

  app.listen(3000, () => {
    console.log("connected at port 3000");
  });
}
