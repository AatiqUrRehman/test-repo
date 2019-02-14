var express = require('express'); 
const Appointment=require("../Models/Appointment");
var router = express.Router(); 
router.get("",(req,res)=>{
    return Appointment.find({},(err,appointments)=>{
    if(err){
    console.log("Erroro Here")
    }
    else{
        res.send(appointments)
    }
    })
    });
    router.post("",(req,res)=>{
        console.log(req.body);
        var d=new Date();
        var time=`${d.getHours()}:${d.getMinutes()}`;
        var appointment=new Appointment()
        appointment.patient_email=req.body.patient_email,
        appointment.weight=req.body.weight,
        appointment.disease=req.body.disease,
        appointment.age=req.body.age,
        appointment.description=req.body.description,
        appointment.chosenDate=d.getDate(),
        appointment.time_slot=time
        appointment.doctor_id="Masdasd"
           return appointment.save();
    })
    router.delete("/:id",(req,res)=>{
    return Appointment.findByIdAndDelete(req.params.id,(err,result)=>{
    if(err){
        console.log("Here")
    }
    else{
        res.send(result)
    }
    })    
    });
    router.get("/Update/:id",(req,res)=>{
        return Appointment.findById(req.params.id,(err,result)=>{
        if(err){
            console.log("Here")
        }
        else{
            res.send(result)
        }
        })    
        });
        router.post("/Update/:id",(req,res)=>{
            return Appointment.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
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