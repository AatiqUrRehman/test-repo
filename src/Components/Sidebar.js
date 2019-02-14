import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
        <ul  className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
           <div className="sidebar-brand-icon rotate-n-15">
             <i className="fas fa-laugh-wink"></i>
           </div>
           <div className="sidebar-brand-text mx-3">AMS Admin</div>
         </a>
         <hr className="sidebar-divider my-0"/>
         <li className="nav-item">
           <a className="nav-link" href="/">
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span>Dashboard</span></a>
         </li>
         <hr className="sidebar-divider"/>
         <div className="sidebar-heading">
           Pages
         </div>
         <hr className="sidebar-divider my-0"/>
         <li className="nav-item">
           <a className="nav-link" href="/Appointments">
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span>Appointments</span></a>
         </li>
         <hr className="sidebar-divider my-0"/>
         <li className="nav-item">
           <a className="nav-link" href="/patients">
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span>Patients</span></a>
         </li>
         <hr className="sidebar-divider my-0"/>
         <li className="nav-item">
           <a className="nav-link" href="/DoctorAtHomes">
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span>DoctorAtHomes</span></a>
         </li>
         <hr className="sidebar-divider my-0"/>
         <li className="nav-item">
           <a className="nav-link" href="/OrdeMedicines">
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span>OrderMedicines</span></a>
         </li>
         <hr className="sidebar-divider my-0"/>
         <li className="nav-item">
           <a className="nav-link" href="/DoctorDetails">
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span>DoctorDetails</span></a>
         </li>
         <hr className="sidebar-divider my-0"/>
         <li className="nav-item">
           <a className="nav-link" href="/DoctorCategories">
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span>DoctorCategories</span></a>
         </li>
         <hr className="sidebar-divider my-0"/>
         <li className="nav-item">
           <a className="nav-link" href="/Medicnes">
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span>Medicines</span></a>
         </li>
       
    </ul>
    )
  }
}
