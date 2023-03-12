const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        min: 3,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    tour:[{
        type: mongoose.Schema.ObjectId,
        ref: 'tour',
        required: true
    }],
    user: [{
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: true
    }]
}, {
    timestamps: true
})

reviewSchema.statics.calcAverageRatings = async function(tourId) {
    const stats = await this.aggregate([
        {$match: {tour: tourId}},
        {$group: {
            _id: '$tour',
            nRating: { $sum : 1 },
            avgRating: { $avg : '$rating'}
        }}
    ])
    return stats;
}
reviewSchema.pre('save', function() {
    console.log(this);
})
const reviewModel = mongoose.model('review',reviewSchema);

module.exports = reviewModel;