const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true,useUnifiedTopology: true});
/* Fruit Schema */
const fruitSchema = mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});
const Fruit = mongoose.model("Fruit",fruitSchema);
const fruit = new Fruit({
  name : "Apple",
  rating: 4,
  review: "Sucks granny balls"
});
fruit.save();
