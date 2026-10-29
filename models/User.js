const mongoose = require('mongoose')

//schema

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
,    }
},{timestamps: true})

//model
const User = mongoose.model('User',userSchema)

//exports
module.exports = User