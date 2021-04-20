//jshint esversion:6

/* Adding Database*/
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/journalDB",{useNewUrlParser: true, useUnifiedTopology: true});
const journalSchema = new mongoose.Schema({
  topic: String,
  content: String,
});
const Journal = mongoose.model("Journal",journalSchema);


const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const posts = [];
const homeStartingContent = "Welcome to the Personal Journal";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  Journal.find({},function(err,posts){
      res.render("home.ejs",{homeContent: homeStartingContent, content: posts  });
  });
});
app.get("/about",function(req,res){
  res.render("about.ejs",{aboutpage: aboutContent});
});
app.get("/contact",function(req,res){
  res.render("contact.ejs",{contactInfo: contactContent});
});
app.get("/compose",(req,res)=>{
  res.render("compose.ejs");
});
app.use(bodyParser.urlencoded({extended: true}));
app.post("/compose",(req,res)=>{

   const post = new Journal({
     topic: req.body.titleText,
     content:req.body.postText,
   });
   Journal.find({topic: req.body.titleText},function(err,results){
     if(results.length == 0){
       post.save();
     }
   });
   res.redirect("/");
});
app.get("/post/:postName",function(req,res){
  var paramTitle = req.params.postName;
  paramTitle = _.lowerCase(paramTitle);
  var postContent;
  Journal.find({topic: req.params.postName},function(err,posts){
      console.log(posts);
    var posttitle = req.params.postName;
    posttitle = _.lowerCase(posttitle);
    postContent = posts[0].content;
    console.log(postContent);
    res.render("post.ejs",{newPostTitle: req.params.postName, postParaGraph: postContent});
  });

});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
