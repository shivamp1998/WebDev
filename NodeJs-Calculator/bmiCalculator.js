//jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiIndex.html");
});
app.post("/bmicalculator",function(req,res){
  var a = req.body.height;
  var b = req.body.weight;
  var ans = b/a;
  if(ans > 5){
    res.send("You are Awesome" + ans);
  }else res.send("You are not Awesome" + ans);
});
app.listen(3000,function(){
  console.log("Server Started!");
});
