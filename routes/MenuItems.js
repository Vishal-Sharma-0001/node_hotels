const express = require("express");
const router = express.Router();
const MeunItems = require('../models/menuitems');

router.post('/' , async (req,res)=>{
    try{
        const data=  req.body;
        console.log(data)       
        const menuitem = new MeunItems(data);
       await menuitem.save();
        res.status(200).json({menuitem})
    }catch(err){
        // console.log("error : ",err)
        res.status(500).json({err : " internal server error"})
    }
})

router.get('/' ,async (req,res) =>{
    try{
        const items = await MeunItems.find();
        res.status(200 ).json(items);
    }catch(err){
        console.log("error : ",err )
        res.status(500).json({err : "internal server error "})
    }
})

router.get( '/:categ' ,async (req,res) => {
    try{
        const data = req.params.categ;
        
        if(data === "spicy"|| data === "sour"||data === "sweet")
        {  
            const menuFind =await MeunItems.find({taste:data})
            res.status(200).json({menuFind});
        }else{
            res.status(404).json("data not found for your query " )
        }
    }catch(err){
        res.status(500).json({err : "internal error " })
    }
})

module.exports= router;