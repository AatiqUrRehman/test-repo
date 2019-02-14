var express = require('express'); 
var Medicine=require("../Models/Medicine")
var router = express.Router(); 
router.get("",(req,res)=>{
    return Medicine.find({},(err,patients)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(patients)
        }
    });
    })
    router.post("",(req,res)=>{
        var medicine=new Medicine()
        medicine.name=req.body.name;
        medicine.type=req.body.type;
        medicine.description=req.body.description;
        medicine.expiry_Date=req.body.expiry_date;
        medicine.price=req.body.price;
        return medicine.save();
    })
    router.delete("/:id",(req,res)=>{
        return Medicine.findByIdAndDelete(req.params.id,(err,result)=>{
            if(err){
                console.log("Here")
            }
            else{
                res.send(result)
            }
            }) 
    });
    router.get("/Update/:id",(req,res)=>{
        return Medicine.findById(req.params.id,(err,result)=>{
        if(err){
            console.log("Here")
        }
        else{
            res.send(result)
        }
        })    
        });
        router.post("/Update/:id",(req,res)=>{
            console.log(req.body)
            return Medicine.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
            if(err){
                console.log("Here")
            }
            else{
                res.send(result)
            }
            })    
            });
//export this router to use in our index.js 
module.exports = router; 