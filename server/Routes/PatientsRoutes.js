var express = require('express'); 
const Patient=require("../Models/Patient")
var router = express.Router(); 
router.get("",(req,res)=>{
    return Patient.find({},(err,patients)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(patients)
        }
    });
    })
    router.post("",(req,res)=>{
        var patient=new Patient()
        patient.name=req.body.name;
        patient.email=req.body.email;
        patient.password=req.body.password;
        patient.phone=req.body.phone;
        patient.gender="Male";
        patient.Profile=req.body.Profile;
        patient.active=false
        return patient.save();
    })
    router.delete("/:id",(req,res)=>{
        return Patient.findByIdAndDelete(req.params.id,(err,result)=>{
            if(err){
                console.log("Here")
            }
            else{
                res.send(result)
            }
            }) 
    });
    router.get("/Update/:id",(req,res)=>{
        return Patient.findById(req.params.id,(err,result)=>{
        if(err){
            console.log("Here")
        }
        else{
            res.send(result)
        }
        })    
        });
        router.post("/Update/:id",(req,res)=>{
            console.log("Here");
            return Patient.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
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