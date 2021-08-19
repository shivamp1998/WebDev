const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3000;
const app = express();
const users = require('./routes/users');
app.use(bodyParser.json());
app.use(cors());
app.use('/users',users);
app.use(express.static(path.join(__dirname,'public')));

mongoose.connect('mongodb://localhost:27017/meanauth',{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false},()=>{
  console.log("database connected!");
})

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

app.get('/',(req,res)=> {
  res.send("Hello!");
})
app.listen(3000,console.log("Server started at port 3000"));
