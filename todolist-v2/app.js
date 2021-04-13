//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser: true,useUnifiedTopology: true});

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required:[true,"specify Your Todo"],
  }
});

const TodoList = mongoose.model("TodoList",todoSchema);

const item1 = new TodoList({
  name: "Wake Up",
});

const item2 = new TodoList({
  name: "get Readt",
});

const item3 = new TodoList({
  name: "Go Work",
});



app.get("/", function(req, res) {
  TodoList.find({},function(err,results){
  const day = date.getDate();
  if(results.length === 0){
     TodoList.insertMany([item1,item2,item3],function(err){});
  }
  const d = date.getYear();
  res.render("list", {listTitle: day, newListItems: results, thisYear: d});
});
});

app.post("/", function(req, res){
  const item = req.body.newItem;
  const newItem = new TodoList({
    name: item,
  });

  TodoList.insertMany([newItem],function(err){
    res.redirect("/");
  });

});
app.post("/delete",function(req,res){
  TodoList.deleteOne({_id:req.body.checkbox},function(err){});
  res.redirect("/");
});
app.get("/:customListName", function(req,res){
  const(req.params.customListName);
});
app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
