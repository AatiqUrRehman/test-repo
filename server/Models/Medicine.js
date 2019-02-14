const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MedicineSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    expiry_Date:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
});
module.exports=mongoose.model("medicines",MedicineSchema);
