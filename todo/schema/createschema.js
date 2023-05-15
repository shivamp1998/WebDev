const mongoose = require("mongoose");
const List = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const TodoList = mongoose.model("TodoList", List);
module.exports = TodoList;
