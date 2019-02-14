var express = require('express'); 
const DoctorCateogry=require("../Models/DoctorCategory")
var router = express.Router(); 
router.get("",(req,res)=>{
    return DoctorCateogry.find({},(err,patients)=>{
        if(err){
        }
        else{
            res.send(patients)
        }
    });
    })
    router.post("",(req,res)=>{
        var doctorCateogry=new DoctorCateogry()
        doctorCateogry.title=req.body.name;
        return doctorCateogry.save();
    })
    router.delete("/:id",(req,res)=>{
        return DoctorCateogry.findByIdAndDelete(req.params.id,(err,result)=>{
            if(err){
                console.log("Here")
            }
            else{
                res.send(result)
            }
            }) 
    });
    router.get("/Update/:id",(req,res)=>{
        return DoctorCateogry.findById(req.params.id,(err,result)=>{
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
            return DoctorCateogry.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
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