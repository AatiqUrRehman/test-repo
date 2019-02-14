var express = require('express'); 
const OrderMedicines=require("../Models/OrderMedincines");
var router = express.Router(); 
router.get("",(req,res)=>{
    return OrderMedicines.find({},(err,orderMedicines)=>{
    if(err){
    console.log("Erroro Here")
    }
    else{
        res.send(orderMedicines)
    }
    })
    });
    router.post("",(req,res)=>{
        var orderMedicine=new OrderMedicines();
        orderMedicine.user_email=req.body.useremail;
        orderMedicine.quantity=req.body.quantity;
        orderMedicine.medId=req.body.medId;
        orderMedicine.save();
    })
    router.delete("/:id",(req,res)=>{
    return OrderMedicines.findByIdAndDelete(req.params.id,(err,result)=>{
    if(err){
        console.log("Here")
    }
    else{
        res.send(result)
    }
    })    
    });
    router.get("/Update/:id",(req,res)=>{
        return OrderMedicines.findById(req.params.id,(err,result)=>{
        if(err){
            console.log("Here")
        }
        else{
            res.send(result)
        }
        })    
        });
        router.post("/Update/:id",(req,res)=>{
            return OrderMedicines.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
            if(err){
                console.log("Here")
            }
            else{
                console.log("Success Here")
                console.log(result)
                res.send(result)
            }
            })    
            });
//export this router to use in our index.js 
module.exports = router; 