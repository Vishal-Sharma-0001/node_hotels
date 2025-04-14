const express = require("express");
const app  = express();
app.use(express.urlencoded({ extended: true })); 
const connectDb = require('./databases/database.js')
const MeunItems = require('./models/menuitems.js');;
const personRoutes = require('./routes/personRoutes.js')
const menuRouter = require('./routes/MenuItems.js')
app.use(express.json());
app.use('/menu', menuRouter)
app.use('/person', personRoutes  );
connectDb()

app.get('/' ,(req,res) =>{
    res.send("welcome to our hotel ");

} )

app.listen(3000 ,()=> {
    console.log("server is started successfully ");
})