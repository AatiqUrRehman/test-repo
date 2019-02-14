const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DoctorCategorySchema=new Schema({
    title:{
    type:String,
    required:true
    }
});
module.exports=mongoose.model("doctorcategories",DoctorCategorySchema)