//jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine","ejs");
app.get("/",function(req,res){
    var today = new Date();
    var options = {
      weekday: "long",
      day : "numeric",
      month: 'long',
    }
    var day = today.toLocaleString("en-US",options);
    res.render("list", { thisDay : day});
});
app.use(bodyParser.urlencoded({extended: true}));
app.post("/",function(req,res){
    console.log(req.body.newItem);
    res.send(req.body.newItem);
});
app.listen(3000,function(){
  console.log("Server started on port 3000!");
});
