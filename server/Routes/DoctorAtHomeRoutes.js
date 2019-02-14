var express = require('express'); 
const DoctorAtHomes=require("../Models/DoctorAtHome");
var router = express.Router(); 
router.get("",(req,res)=>{
    return DoctorAtHomes.find({},(err,doctorAtHome)=>{
    if(err){
    console.log("Erroro Here")
    }
    else{
        res.send(doctorAtHome)
    }
    })
    });
    router.post("",(req,res)=>{
        var doctorAtHome=new DoctorAtHomes();
        doctorAtHome.age=req.body.age;
        doctorAtHome.description=req.body.description;
        doctorAtHome.patient_email=req.body.patient_email;
        doctorAtHome.disease=req.body.disease;
        doctorAtHome.save();
        
    })
    router.delete("/:id",(req,res)=>{
    return DoctorAtHomes.findByIdAndDelete(req.params.id,(err,result)=>{
    if(err){
        console.log("Here")
    }
    else{
        res.send(result)
    }
    })    
    });
    router.get("/Update/:id",(req,res)=>{
        return DoctorAtHomes.findById(req.params.id,(err,result)=>{
        if(err){
            console.log("Here")
        }
        else{
            res.send(result)
        }
        })    
        });
        router.post("/Update/:id",(req,res)=>{
            return DoctorAtHomes.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
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