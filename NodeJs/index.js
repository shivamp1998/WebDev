var http = require("http");
http.createServer(function(req,res){
  res.writeHead(200,{'content-Type' : 'text/html'});
  res.end("Hello World!");
}).listen(3000);



/* Taking an Inut */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is Your name?', name => {
  console.log(`hi my name is ${name}`);
  readline.close();
})

const progressBar = require("progress");
const bar = new progressBar(':bar',{total : 10});
const timer = setInterval(()=> {
  bar.tick();
  if(bar.complete){
    clearInterval(timer);
  }
},100);
