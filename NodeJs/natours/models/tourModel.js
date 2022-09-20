const { model, Schema }  = require('mongoose')

const toursSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A tour must have name'],
        unique: true
    },
    difficulty: {
        type: String,
        required: [true, 'Difficulty is required'],
        enum: ['easy', 'medium', 'difficult']
    },
    duration: {
        type: Number, 
        required: [true, 'A tour must have a duration']
    },
    ratingsAverage: {
        type: Number,
        default: 0.0
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have group size']
    },
    price: {
        type: Number,
        required: [true, 'A tour must have price']
    },
    discount: Number,
    summary: {
        type: String, 
        trim: true,
        required: [true, 'A tour must have description']
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, 'A tour must have a cover image']
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDates: [Date]
})

module.exports = model('tour',toursSchema);