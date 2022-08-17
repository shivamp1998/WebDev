const { model, Schema }  = require('mongoose')

const toursSchema = new Schema({
    name: {
        type: String,
    },
    rating: {
        type: Number,
    },
    price: {
        type: Number,
    }
})

module.exports = model('tour',toursSchema);