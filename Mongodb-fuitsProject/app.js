const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true,useUnifiedTopology: true});
/* Fruit Schema */
const fruitSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: Number,
  review: String
});
const Fruit = mongoose.model("Fruit",fruitSchema);
const fruit = new Fruit({
  name : "Apple",
  rating: 4,
  review: "Sucks granny balls"
});
const bananas = new Fruit({
  name: "Banana",
  rating: 5,
  review: "not worth a shit!"
});
const pinapple = new Fruit({
  name: "pineapple",
  rating: 10,
  review: "best fruit I ever had!"
});
// Fruit.insertMany([bananas,pinapple],function(err){
//   if(err){
//     console.log("Error!");
//   }else console.log("Success!");
// });
const peach = new Fruit({
    name: "Peach",
    rating: 5,
    review: "Never Eaten"
});

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});
const Person = mongoose.model("Person",peopleSchema);

const person1 = new Person({
  name: "Shivam",
  age: 22
});
const person2 = new Person({
  name: "John",
  age: 25,
  favouriteFruit: peach,
});


Person.updateOne({name: "Shivam"},{favouriteFruit:pinapple},function(err){});


// Fruit.insertMany([peach],function(err){
//   if(err){
//     console.log("FuckOff");
//   }else console.log("Don't Fuck off");
// });
//Fruit.deleteMany({name: "Peach"},function(err){});
Fruit.find(function(err,fruits){
  if(err)console.log(err);
  else{
    mongoose.connection.close();
    for(var i=0;i<fruits.length;i++){
      console.log(fruits[i].name);
    }
  }
});
