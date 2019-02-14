const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DoctorDetailSchema=new Schema({

    name:{
    type:String,
    required:true
    },
    phone:{
        type:String,
    required:true
    },
    email:{
        type:String,
        required:true
    },
    clinic_name:{
        type:String,
        required:true
    },
    clinic_address:{
        type:String,
        required:true
    },
    category_id:{
        type:String,
        required:true
    },
    clinic_timing:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("doctordetails",DoctorDetailSchema)