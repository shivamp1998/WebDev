//jshint esversion:6

require("dotenv").config()
const express = require("express");
const md5 = require("md5");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser: true,useUnifiedTopology: true});
const userSchema = new mongoose.Schema({
  email:String,
  password: String
});

userSchema.plugin(encrypt, {secret:process.env.SECRET, encryptedFields:["password"]});
const User = new mongoose.model("User",userSchema);

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.render("home.ejs");
});
app.get("/login",(req,res)=>{
  res.render("login.ejs");
});
app.get("/register",(req,res)=>{
  res.render("register.ejs");
});
app.get("/secrets",(req,res)=>{
  res.render("secrets.ejs");
});

app.post("/register",function(req,res){
  const newUser = new  User({
    email: req.body.username,
    password: md5(req.body.password)
  });
  newUser.save(function(err){
    if(!err){
      res.render("secrets.ejs");
    }else console.log(err);
  });
})

app.post("/login",function(req,res){
  let userName = req.body.username;
  User.findOne({email: userName},function(err,found){
    if(!err){
      if(found.password == md5(req.body.password)){
        res.render("secrets.ejs");
      }else res.Send("Fuckk of Mate! Will You?")
    }
  })
})



app.listen(3000,function(){
  console.log("Server Started on 3000");
})
