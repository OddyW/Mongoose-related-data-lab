// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const morgan = require('morgan')


//Importing models
const User = require ('./models/User')
const Review = require ('./models/Review')
const Listing = require ('./models/Listing')


// Middleware
app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT
app.use(methodOverride('_method'))
app.use(morgan('dev'))


async function conntectToDB(){ //connection to the database
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}


conntectToDB()











// Routes go here



//step 3
// async function testRelationships(){
//     const allListing = await Listing.find()
//     console.log(allListing)
// }


//step 4
async function testRelationships(){
    const allListing = await Listing.find().populate('owner')
    console.log(allListing)
}

testRelationships()




 
 
 
 




app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000




