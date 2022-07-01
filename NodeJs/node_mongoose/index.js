const mongoose = require("mongoose");
const Dishes = require("./models/dishes");


const url = "mongodb://localhost:27017/conFusion";

const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

connect.then((db)=> {
  console.log("Connected Correctly to Server!");
  Dishes.create({
    name: 'Uthipizza',
    description: 'test',
  })
  .then((dish)=> {
    console.log(dish);
    Dishes.findByIdAndUpdate(dish._id, {$set: {descrition: 'Updated test'}}, {new: true}).exec();
  })
  .then((dish) => {
    console.log(dish);
    dish.comments.push({
      rating: 5,
      comment: "I\'m getting a sinking feeling!",
      author: 'Leonardo di Caprio'
    })
    return dish.save();
  })
  .then((dishes) => {
    console.log(dishes);
    return Dishes.deleteMany({});
  })
  .then(()=> {
    return mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  })
});


//await async
const newFunction = await 
