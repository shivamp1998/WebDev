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

app.post("/articles",(req,res)=>{
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content,
  });
  newArticle.save(function(err){
    if(!err){
      res.send("SuccessFully Added The Article");
    }
  });
})
/* REQUEST TARGETING SINGLE ROUTE*/
app.route("/articles/:articleTitle")
.get(function(req,res){
  Article.findOne({title: req.params.articleTitle},function(err,result){
    res.send(result);
  })
})
.put(function(req,res){
  Article.updateOne({title: req.params.articleTitle},{$set: {title: req.body.title, content: req.body.content}},function(err){
    if(!err){
      res.send("Update Successs");
    }
  })
})
.patch((req,res)=>{
  Article.updateOne({title: req.params.articleTitle},{$set:req.body},function(err){
    if(!err){
      res.send("Updated Everything!");
    }
  })
});

app.get("/",function(req,res){
  res.send("Ready to Go!");
})

app.listen(3000,()=>{
  console.log("Server Started on Port 3000");
})
