const express = require("express");
const port = 8000;
const parser = require("body-parser");
const db = require("./config/mongoose");
const TodoList = require("./schema/createschema");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(parser.urlencoded({ extended: false }));
app.use(express.static("assets"));

//step1 store in database
app.post("/add", function (req, res) {
  TodoList.create(
    {
      task: req.body.task,
      category: req.body.category,
      date: req.body.date,
    },
    function (err, data) {
      if (err) {
        console.log("error while creating task");
        return;
      }
      return res.redirect("back");
    }
  );
});

//step2 fetch from database
app.get("/", function (req, res) {
  TodoList.find({}, function (err, data) {
    if (err) {
      console.log("canot find ");
      return;
    }
    return res.render("home", {
      title: "TODO",
      taskslist: data,
    });
  });
});

//step3 delete from database
app.get("/del/", function (req, res) {
  let id = req.query.id;

  TodoList.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("cannot be deleted");
      return;
    }
    return res.redirect("back");
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log("error");
    return;
  }
  console.log("express is connected");
});
