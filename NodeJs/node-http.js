const http = require("http");
const fs = require("fs");
const path = require('path');



const server = http.createServer((req,res)=> {
  console.log(req.headers);
  if (req.method == 'GET') {
    var fileURL;
    if(req.url =='/') fileURL = '/index.html';
    else fileURL = req.url;

    var filePath = path.resolve('./public' + fileURL);
    const fileEXT = path.extname(filePath);
    if(fileEXT == '.html') {
      fs.exists(filePath,(exists)=> {
        if(!exists) {
          res.statusCode = 404;
          res.setHeader('Content-Type','text/html');
          res.end('<html><body><h1>Error 404:' + fileURL + 'Not found </h1></body></html>');
          return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        fs.createReadStream(filePath).pipe(res);
      })
    }else {
      res.statusCode  = 404;
      res.setHeader('Content-Type','text/html');
      res.end('<html><body><h1>Error 404: ' + fileEXT + 'not supported </h1></body></html>');
    }
  }else {
    res.statusCode = 404;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1> Error 404: ' + req.method + 'not supported');
    return;
  }
});

server.listen(3000,'localhost',()=> {
  console.log(`server running`);
})
