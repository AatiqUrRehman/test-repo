const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderMedicines=new Schema({
    user_email:{
    type:String,
    required:true
    },
    quantity:{
        type:String,
        required:true
    },
    medId:{
        type:String,
        required:true
    },
    created_at:{
        type:Date
    }
});
module.exports=mongoose.model("ordermedicines",OrderMedicines)