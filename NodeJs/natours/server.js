const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
dotenv.config({path: './config.env'})
const toursModel = require('./models/tours');


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true})
.then((con) => {
    console.log('Connection established! ',process.env.MONGO_URL);
})

const saveTour = async () => {
    const toursData = await new toursModel({
        name: 'new Tour',
        price: 299,
        rating: 2.5
    }).save();
}

saveTour();




app.listen(process.env.port, () => {
    console.log('Server Started on port ' + process.env.port);
});
  