const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AppointmentSchema=new Schema({
    patient_email:{
    type:String,
    required:true
    },
    weight:{
        type:String,
        required:true
    },
    disease:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    chosenDate:{
        type:String,
        required:true
    },
    time_slot:{
        type:String,
        required:true
    },
    doctor_id:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("appointments",AppointmentSchema)