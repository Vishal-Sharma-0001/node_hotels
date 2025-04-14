const mongoose = require('mongoose');
const url ='mongodb://127.0.0.1:27017/resturant';

const  connectDb = async() => {
   await mongoose.connect(url )
    .catch( (error)=> console.error(error) )
    .then( ( ) => console.log("server connect success"))
} 
module.exports = connectDb;