const mongoose = require('mongoose')

//schema

const reviewSchema = new mongoose.Schema({
    reviewTitle: {
        type: String
    },
    reviewBody: {
        type: String
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps: true})

//model
const Review = mongoose.model('Review', reviewSchema)

//exports
module.exports = Review