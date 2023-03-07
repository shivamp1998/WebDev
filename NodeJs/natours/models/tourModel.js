const { model, Schema }  = require('mongoose')
const slugify = require('slugify');
const toursSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A tour must have name'],
        unique: true,
        minlength: [1, 'A name must be atleast 1 charatcter long'],
        maxlength: [10, 'A name must be atlest 10 characters long']
    },
    difficulty: {
        type: String,
        required: [true, 'Difficulty is required'],
        enum: {
            values: ['easy', 'medium', 'difficult'],
            message: 'Difficulty can be only easy, medium and difficult'
        }
    },
    duration: {
        type: Number, 
        required: [true, 'A tour must have a duration']
    },
    ratingsAverage: {
        type: Number,
        min: [1,'ratings cannot be less than 1'],
        max: [5,'ratings cannot be more than 5'],
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
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDates: [Date],
    startLocation: {
        type: {
            type: String,
            default: 'Point',
            enum: ['Point']
        },
        coordinates: [Number],
        address: String, 
        description: String
    },
    locations: [{
        type: {
            type: String,
            defualt: 'Point',
            enum: ['Point']
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number
    }]
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

toursSchema.virtual('durationWeeks').get(function () {
    return this.duration / 7 ;
})

toursSchema.pre('save', function() {
    this.slug = slugify(this.name, {lower: true});
    next();
})

module.exports = model('tour',toursSchema);