const express = require("express");
const router = express.Router();
const Person = require('../models/person');
const person = require("../models/person");
    router.post('/' , async(req,res) =>{
    try{
         
           const data = req.body;
           console.log(data);
           const newPerson = new Person(data);
           console.log("data saved in database ");
           newPerson.save();
           res.status(200).json(newPerson);
    }catch(err){
       console.log("error : " , err);
       res.status(500).json({err: 'error occur'})
    }
   })
   
   router.put('/:id' , async (req,res)=>{
        try{
            const id = req.params.id ;
            const updataedData = req.body;
            const up_data =await person.findByIdAndUpdate(id , updataedData ,{
                new:true  ,// return updated documnents ,
                runValidators:true // run mongoose validation required perameter check 
             })  
            
             console.log( up_data);
             if(!up_data) res.status(404).json("no data found for this")
             
            console.log("updated successfull" ,up_data )    
            res.status(200).json({up_data})
            }catch(err){
            res.status(500).json({err :" internal server error"})
        }
   })
   router.delete('/:id' ,async (req,res) =>{
    try{
        const id = req.params.id;
       const dlt = await Person.findByIdAndDelete(id)
       if(dlt) console.log("deleted success ");
       res.status(200).json("deleted sucees ")
    }catch(err){
        res.status(500).json({err : "no changes in database "})
    }
   })
    router.get('/:worktype' , async (req,res) =>{
       try{
      
           const worktype= req.params.worktype;
           if( worktype === "chef" || worktype ==="manager" || worktype =="waiter")
           {
               const findEmployes = await Person.find({work:worktype})
               res.status(200).json({findEmployes})            
           }else{
               res.status(404).json({error : 'not data found for your query '})
           }
       }catch(err){
           res.status(500).json({error : 'internal server error'})
       }
   })

    router.get('/' ,async (req,res) =>{
       try{    
           const data =await Person.find()
           res.status(200).json(data);
       }catch(err)
       {
           console.log("error : ",err );
           res.status(500).json({err : 'internal server error'})
       }
   })
   

   module.exports = router;


   