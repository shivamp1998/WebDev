const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Tour = require('../../models/tourModel')
const dotenv = require('dotenv');
dotenv.config({
    path: path.resolve(__dirname, '../../config.env')
})
mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: false, useNewUrlParser: true })
.then((conn) => {
    console.log(`connected`)
})



const tours = JSON.parse(fs.readFileSync(__dirname + '/tours-simple.json','utf-8'))

const createTour = async () => {
    const addedTours = await Tour.insertMany(tours)
}
