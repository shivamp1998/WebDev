const mongoose = require("mongoose");
const Dishes = require("./models/dishes");


const url = "mongodb://localhost:27017/conFusion";

const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

connect.then((db)=> {
  console.log("Connected Correctly to Server!");
  var newDish = Dishes({
    name: 'Uthipizza',
    description: 'test',
  })
  newDish.save().then((dish)=> {
    console.log(dish);
    Dishes.find({}).exec();
  })
  .then((dishes) => {
    console.log(dishes);
    return Dishes.remove({});
  })
  .then(()=> {
    return mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  })
})
