const mongoose = require("mongoose");
const schema = mongoose.Schema;


const commentSchema = new schema({
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  }
},{
  timestamp: true,
})
const dishSchema = new schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  comments: [commentSchema]
},{
  timestamps: true,
});


var Dishes = mongoose.model("Dish",dishSchema);

module.exports = Dishes;
