const express=require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
const Appointments=require("./Routes/AppointmentRoutes");
const DoctoCateogries=require("./Routes/DoctorCategoryRoutes");
const Patients=require("./Routes/PatientsRoutes");
const Medicines=require("./Routes/MedicinesRoutes");
const DoctorDetails =require("./Routes/DoctorDetailsRoutes")
const DoctorAtHome =require("./Routes/DoctorAtHomeRoutes")
const OrderMedicines =require("./Routes/OrderMedicinesRoutes")
const app=express();
const cors=require("cors");
const port=4000;

app.use(bodyParser.json());
app.use(cors());
app.use("/appointments",Appointments);
app.use("/patients",Patients);
app.use("/medicines",Medicines);
app.use("/orderMedicines",OrderMedicines);
app.use("/doctorAtHomes",DoctorAtHome);
app.use("/doctorDetails",DoctorDetails);
app.use("/doctorcategories",DoctoCateogries)
app.get("/",(req,res)=>{
res.send("Hello node")
});
mongoose.connect(`mongodb://${process.env.UserName}:${process.env.Password}@ds042888.mlab.com:42888/${process.env.DatabaseName}`)
.then(()=>{
    app.listen(3001,()=>console.log("Server Running on Port 3001"));
})
.catch(err=>{
    console.log(err);
});