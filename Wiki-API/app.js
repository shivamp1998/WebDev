const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser: true, userUnifiedTopology: true});

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article",articleSchema);





app.get("/",function(req,res){
  res.send("Ready to Go!");
})

app.listen(3000,()=>{
  console.log("Server Started on Port 3000");
})
