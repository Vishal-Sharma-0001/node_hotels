const express = require("express");
const app  = express();
app.use(express.urlencoded({ extended: true })); 
const connectDb = require('./databases/database.js')
const personRoutes = require('./routes/personRoutes.js')
const menuRouter = require('./routes/MenuItems.js')
require('dotenv').config();
app.use(express.json());
// const url = process.env.DATABSE_URL;
app.use('/menu', menuRouter)
const PORT = process.env.PORT||4000;
app.use('/person', personRoutes );
connectDb()

app.get('/' ,(req,res) =>{
    res.send("welcome to our hotel ");

} )

app.listen(PORT ,()=> {
    console.log("server is started successfully ");
})