const { model, Schema }  = require('mongoose')

const toursSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    rating: {
        type: Number,
    },
    price: {
        type: Number,
    }
})

module.exports = model('tour',toursSchema);