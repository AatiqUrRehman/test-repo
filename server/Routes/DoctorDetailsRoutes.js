var express = require('express'); 
const DoctorDetails=require("../Models/DoctorDetail")
var router = express.Router(); 
router.get("",(req,res)=>{
    return DoctorDetails.find({},(err,doctordetail)=>{
        if(err){
        }
        else{
            res.send(doctordetail)
        }
    });
    })
    router.post("",(req,res)=>{
        var doctordetail=new DoctorDetails()
        doctordetail.name=req.body.name;
        doctordetail.email=req.body.email;
        doctordetail.clinic_name=req.body.clinic_name;
        doctordetail.phone=req.body.phone;
        doctordetail.clinic_address=req.body.clinic_address;
        doctordetail.clinic_timing=req.body.clinic_timing;
        doctordetail.category_id="cateid";
        return doctordetail.save();
    })
    router.delete("/:id",(req,res)=>{
        return DoctorDetails.findByIdAndDelete(req.params.id,(err,result)=>{
            if(err){
                console.log("Here")
            }
            else{
                res.send(result)
            }
            }) 
    });
    router.get("/Update/:id",(req,res)=>{
        return DoctorDetails.findById(req.params.id,(err,result)=>{
        if(err){
            console.log("Here")
        }
        else{
            res.send(result)
        }
        })    
        });
        router.post("/Update/:id",(req,res)=>{
            return DoctorDetails.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
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