const express = require("express");
const app = express();
app.use(express.static("public"));

const ejs = require("ejs");
app.set("view engine","ejs");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/CoursesDB",{useNewUrlParser: true,useUnifiedTopology: true});
const courseSchema = new mongoose.Schema({
  name: String,
  rollNo:String,
  quiz:[{
    question: String,
    option1: String,
    option2: String,
    option3:String,
    option4:String,
    answer: String,
    marks:Number,
  }]
});
const Course = mongoose.model("Course",courseSchema);
console.log(Coursea);
app.post("/teacher/createCourse",(req,res)=>{
  const newCourse = new Course({
    name: req.body.courseName,
  })
  newCourse.save((err)=>{
    if(!err){
      console.log("Added");
    
  });

  res.redirect("/teacher");
  Course.insertMany({newCourse},(err)=>{
      if(!err)
      return "Failure";
      else return "No Fail";
  })
});
let date = new Date();
app.get("/",(req,res)=>{
  res.render("index.ejs",{Year: date.getFullYear()});
});
app.get("/teacher",(req,res)=>{
  res.render("teacher.ejs",{Year: date.getFullYear()});
})
app.get("/teacher/createCourse",(req,res)=>{
  res.render("createCourse.ejs",{Year: date.getFullYear()});
})
app.get("/teacher/viewCourse",(req,res)=>{
  Course.find({},function(err,results){
    res.render("viewCourse.ejs",{Year: date.getFullYear(), course: results})
  })
})
app.get("/teacher/course/:custom",function(req,res){
    res.render("courses.ejs",{coursename: req.params.custom,Year: date.getFullYear()})
})
app.get("/:custom/createquestions",function(req,res){
    res.render("createquestion.ejs",{Year: date.getFullYear()});
})
mongoose.set('useFindAndModify', false);

Course.findOneAndUpdate({"name":"Math"},{"$set":{"rollNo":"5"}})
Course.findOne({"name":"Math"},function(err,results){
  console.log(results);
})
app.post("/:custom/createquestions",function(req,res){
    console.log(req.params);
})
app.listen(3000,function(){
  console.log("server Started");
})
