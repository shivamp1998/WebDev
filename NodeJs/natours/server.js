const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
dotenv.config({path: './config.env'})
const toursModel = require('./models/tourModel');


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true})
.then((con) => {
    console.log('Connection established! ',process.env.MONGO_URL);
})





app.listen(process.env.port, () => {
    console.log('Server Started on port ' + process.env.port);
});
  