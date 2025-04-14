const mongoose = require('mongoose');
require('dotenv').config();
// const url = process.env.DATABSE_URL_LOCAL;
const url = process.env.DATABSE_URL
const  connectDb = async() => {
   await mongoose.connect(url )
    .catch( (error)=> console.error(error) )
    .then( ( ) => console.log("server connect success"))
} 
module.exports = connectDb;