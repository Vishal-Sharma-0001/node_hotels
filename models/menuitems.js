const mongoose = require('mongoose');

const MenuItems = new mongoose.Schema({
    name:{
        type:String,required:true
    },
    price:{
    type:Number, required:true,
    },
    taste:{
        type:String, required:true,
        enum:["spicy" ,"sweet","sour"]
    },
    is_drink:{
        type:Boolean ,default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number  ,default:0,
    },
})

module.exports = mongoose.model('MeunItems',MenuItems);