const mongoose = require('mongoose')

//schema
const listingSchema = new mongoose.Schema({
    streetAddress: {
        type: String
    },
    city: {
        type: String
    },
    price: {
        type: Number
    },
    size: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: String
    },
},{timestamps: true})

//model

const Listing = mongoose.model('Listing', listingSchema)

//exports

module.exports = Listing