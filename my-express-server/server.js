//jshint esversion:6
const express = require("express");
const app = express();
app.get("/",function(request, response){
  response.send("Hello");
});
app.get("/about",function(req,res){
  res.send("My name is sarvesh pandey, I am a software engineer, Well this is shit!");
});
app.listen(3000,function(){
  console.log("Server Started!");
});
