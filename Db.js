const mongoose = require('mongoose')
require('dotenv').config();
//Define the MongoDB connection URL
//const mongoURL = process.env.MONGODB_URL //Replace 'mydatabase' with your satabase name 
const mongoURL =process.env.mongoDB_URL  
//set up MongoDB connection
mongoose.connect(mongoURL, {

})

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection.
const Db = mongoose.connection;

//Define event listerners for database connection

Db.on('connected', () => {
    console.log("Connected to MongoDB server");
})

Db.on('error', (err) => {
    console.log("MongoDB connection error", err);
})

Db.on('disconnected', () => {
    console.log("MOngoDB disconnected");
})

//Export the database connection
module.exports = Db;


