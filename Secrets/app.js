//jshint esversion:6

require("dotenv").config()
const express = require("express");
const md5 = require("md5");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

app.use(session({
  secret: "our little secret",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.set("useCreateIndex",true);

const userSchema = new mongoose.Schema({
  email:String,
  password: String
});
userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User",userSchema);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
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
  if(req.isAuthenticated()){
    res.render("secrets.ejs");
  }else{
    res.render("login.ejs");
  }
});

app.post("/register",function(req,res){
  User.register({username: req.body.username}, req.body.password,function(err,user){
    if(err){
      console.log(err);
      res.redirect("/register");
    }else{
      passport.authenticate("local")(req,res,function(){
        res.redirect("/secrets");
      });
    }
  })
});

app.post("/login",function(req,res){
    const user = new User({
      username: req.body.username,
      password: req.body.passowrd
    });
    req.login(user,function(err){
      if(err){
        console.log(err);
      }else{
        passport.authenticate("local")(req,res,function(){
          res.redirect("/secrets");
        });

      }
    })
});
app.get("/logout",function(req,res){
  req.logout();
  res.redirect("/login");
})


app.listen(3000,function(){
  console.log("Server Started on 3000");
})
