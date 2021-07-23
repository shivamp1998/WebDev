const mongoose = require("mongoose");
const schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


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
  image: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true
  },
  label: {
    type: String,
    default: ''
  },
  price: {
    type: Currency,
    required: true,
    min: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  comments: [commentSchema],

},{
  timestamps: true,
});


var Dishes = mongoose.model("Dish",dishSchema);

module.exports = Dishes;
