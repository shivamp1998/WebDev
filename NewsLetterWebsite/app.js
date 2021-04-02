//jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");
app.use(express.static("public"));
app.listen(1337,()=>{
  console.log("Server Started!")
});
app.get('/',function(req,res){
    res.sendFile(__dirname+"/signup.html");
});
app.use(bodyParser.urlencoded({extended:true}));
app.post("/",function(req,res){
   console.log(req.body.firstName);
   console.log(req.body.email);
})
