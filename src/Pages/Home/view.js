import React, { Component } from 'react'
import Sidebar from "../../Components/Sidebar"
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

export default class view extends Component {
  componentWillMount(){
    console.log(sessionStorage.getItem("loginusername"))
    if(sessionStorage.getItem("loginusername")===""||sessionStorage.getItem("loginusername")==null){
      this.props.history.push("/Login")
    }
  }
  render() {
    return (
      <div id="wrapper"> 
        <Sidebar/>
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
      <Header/>
      <div className="container-fluid">
      <div class="row" style={{marginBottom:"20px"}}>
      <div class="col"><div class="card">
      <h4 class="card-title">Doctors</h4>
              <div class="card-body">
                <p class="card-text">There are currently 9 Doctors Registgerd in ou database</p>
                <a href="/DoctorDetails" class="btn btn-primary">Doctor Details</a>
              </div>
            </div>
            </div>
            <div class="col"><div class="card bg-warning text-white">
            <h4 class="card-title">Medicines</h4>
              <div class="card-body">
                <p class="card-text">There are Toal 9 Meicines Regisgterd in Our Database.</p>
                <a href="/Medicnes" class="btn btn-primary">Mediciness</a>
              </div>
            </div>
            </div>
            <div class="col"><div class="card bg-success text-white" >
            <h4 class="card-title">Appointments</h4>
              <div class="card-body">
                <p class="card-text">There are Total 8 Appointments in  the database  <br></br>
                </p>
                <a href="/Appointments" class="btn btn-primary">Appointments</a>
              </div>
            </div>
            </div>
</div>
<div class="row" style={{marginBottom:"20px"}}>
      <div class="col"><div class="card bg-secondary text-white">
      <h4 class="card-title">Categories</h4>
              <div class="card-body">
                <p class="card-text">There are currently 9 Doctors Categories Registgerd in ou database</p>
                <a href="/DoctorCategories" class="btn btn-primary">Doctor Categories</a>
              </div>
            </div>
            </div>
            <div class="col"><div class="card bg-primary text-white">
            <h4 class="card-title">Orders</h4>
              <div class="card-body">
                <p class="card-text">There are Toal 9 Orders Regisgterd in Our Database.</p>
                <a href="/OrdeMedicines" class="btn btn-primary">Orde Medicines</a>
              </div>
            </div>
            </div>
            <div class="col"><div class="card bg-danger text-white" >
            <h4 class="card-title">Patients</h4>
              <div class="card-body">
                <p class="card-text">There are Total 8 Patients in  the database  <br></br>
                </p>
                <a href="/patients" class="btn btn-primary">Appointments</a>
              </div>
            </div>
            </div>
</div>
<div class="row">
      <div class="col"><div class="card bg-info text-white">
      <h4 class="card-title">Doctor At Home</h4>
              <div class="card-body">
                <p class="card-text">There are currently 9 Doctors Registgerd in ou database</p>
                <a href="/DoctorDetails" class="btn btn-primary">Doctor Details</a>
              </div>
            </div>
            </div>
</div>
        </div>
      </div>
     <Footer/>
    </div>
      </div>
    )
  }
}
