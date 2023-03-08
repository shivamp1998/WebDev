const Reviews = require('../models/reviewModel');

exports.getAllReview = async function(req,res,next){
    try {
        const reviews = await Reviews.find({});
        return res.send({review: reviews})
    }catch(err){
        next(err)
    }
}


exports.addReview = async function(req,res,next) {
    try {

    }catch(err) {
        next(err);
    }
}

exports.removeReview = async function(req,res,next) {
    try {
        
    }catch(err) {
        next(err);
    }
}