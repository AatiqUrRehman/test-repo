const mongoose =require("mongoose");
const Schema=mongoose.Schema;
const PatientSchema=new Schema({
    name:{
        type:String,
        required:true
    },
email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    active:{
        type:Boolean,
        required:true
    }

});
module.exports=mongoose.model("patients",PatientSchema);