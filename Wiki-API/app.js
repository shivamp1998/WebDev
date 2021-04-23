const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article",articleSchema);

app.get("/articles",(req,res)=>{
    Article.find((err,results)=>{
      res.send(results);
    })
});




app.get("/",function(req,res){
  res.send("Ready to Go!");
})

app.listen(3000,()=>{
  console.log("Server Started on Port 3000");
})
