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
const day = date.getDate();
const defaultItems = [item1,item2,item3];
const d = date.getYear();
app.get("/", function(req, res) {
  TodoList.find({},function(err,results){

  if(results.length === 0){
     TodoList.insertMany([item1,item2,item3],function(err){});
  }

  res.render("list", {listTitle: "Today", newListItems: results, thisYear: d});
});
});

app.post("/", function(req, res){
  const item = req.body.newItem;
  const listName = req.body.list;
  // console.log(listName);
  const newItem = new TodoList({
    name: item,
  });

  if(listName === "Today"){
    TodoList.insertMany([newItem],function(err){
      res.redirect("/");
    });
  }else{
    List.findOne({name:listName},function(err,result){
      result.items.push(newItem);
      result.save();
      res.redirect("/" + listName);
    })
  }




});
app.post("/delete",function(req,res){
  const listName = req.body.listName;
  if(listName === "Today"){
    TodoList.deleteOne({_id:req.body.checkbox},function(err){});
    res.redirect("/");
  }else{
    List.findOneAndUpdate({name: listName},{$pull:{items: {_id: req.body.checkbox}}},function(err,results){
        res.redirect("/"+ listName);
    })
  }

});

const listSchema = new mongoose.Schema({
  name: String,
  items: [todoSchema]
});

const List = mongoose.model("List",listSchema);



app.get("/:customListName", function(req,res){
  const customListName = req.params.customListName;
  List.findOne({name: customListName},function(err,results){
     if(!err){
       if(!results){
         const list = new List({
           name: customListName,
           items: defaultItems,
         });
        list.save();
        res.redirect("/" + list.name)
      }else {
        res.render("list",{listTitle: customListName, thisYear: d, newListItems: results.items})
      }
     }
  });

  //res.render("list",{listTitle: req.params.customListName, newListItems:[], thisYear: d});
});
app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
