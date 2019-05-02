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
      <div className="row" style={{marginBottom:"20px"}}>
      <div className="col"><div className="card">
      <h4 className="card-title">Doctors</h4>
              <div className="card-body">
                <p className="card-text">There are currently 9 Doctors Registgerd in ou database</p>
                <a href="/DoctorDetails" className="btn btn-primary">Doctor Details</a>
              </div>
            </div>
            </div>
            <div className="col"><div className="card bg-warning text-white">
            <h4 className="card-title">Medicines</h4>
              <div className="card-body">
                <p className="card-text">There are Toal 9 Meicines Regisgterd in Our Database.</p>
                <a href="/Medicnes" className="btn btn-primary">Mediciness</a>
              </div>
            </div>
            </div>
            <div className="col"><div className="card bg-success text-white" >
            <h4 className="card-title">Appointments</h4>
              <div className="card-body">
                <p className="card-text">There are Total 8 Appointments in  the database  <br></br>
                </p>
                <a href="/Appointments" className="btn btn-primary">Appointments</a>
              </div>
            </div>
            </div>
</div>
<div className="row" style={{marginBottom:"20px"}}>
      <div className="col"><div className="card bg-secondary text-white">
      <h4 className="card-title">Categories</h4>
              <div className="card-body">
                <p className="card-text">There are currently 9 Doctors Categories Registgerd in ou database</p>
                <a href="/DoctorCategories" className="btn btn-primary">Doctor Categories</a>
              </div>
            </div>
            </div>
            <div className="col"><div className="card bg-primary text-white">
            <h4 className="card-title">Orders</h4>
              <div className="card-body">
                <p className="card-text">There are Toal 9 Orders Regisgterd in Our Database.</p>
                <a href="/OrdeMedicines" className="btn btn-primary">Orde Medicines</a>
              </div>
            </div>
            </div>
            <div className="col"><div className="card bg-danger text-white" >
            <h4 className="card-title">Patients</h4>
              <div className="card-body">
                <p className="card-text">There are Total 8 Patients in  the database  <br></br>
                </p>
                <a href="/patients" className="btn btn-primary">Appointments</a>
              </div>
            </div>
            </div>
</div>
<div className="row">
<div className="col"><div className="card bg-info text-white">
      <h4 className="card-title">Last Seven Days Orders</h4>
              <div className="card-body">
                <p className="card-text">There are currently 9 Doctors Registgerd in ou database</p>
                <a href="/WeeklyOrders" className="btn btn-primary">Weekly Orders</a>
              </div>
            </div>
            </div>
      <div className="col"><div className="card bg-info text-white">
      <h4 className="card-title">Doctor At Home</h4>
              <div className="card-body">
                <p className="card-text">There are currently 9 Doctors Registgerd in ou database</p>
                <a href="/DoctorDetails" className="btn btn-primary">Doctor Details</a>
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
