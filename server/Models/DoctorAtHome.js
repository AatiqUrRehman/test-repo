const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DoctorAtHomes=new Schema({
    age:{
    type:String,
    required:true
    },
    description:{
        type:String,
        required:true
    },
    disease:{
        type:String,
        required:true
    },
    patient_email:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("doctorathomes",DoctorAtHomes)