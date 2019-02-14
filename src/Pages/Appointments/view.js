import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Spinner from "../../Spinner.gif"
import Sidebar from "../../Components/Sidebar"
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

export default class view extends Component {
  constructor(props){
    super(props);
    this.state={
      loading:true,
      appointments:[]
    }
    this.deletehandler=this.deletehandler.bind(this);
  }
  deletehandler(e){
    e.preventDefault();
    var id=e.target.id;
   fetch(`http://localhost:3001/appointments/${id}`,{method:'DELETE'}).then(res=>(   this.getAppointments()));
  }
  componentWillMount(){
    if(sessionStorage.getItem("loginusername")===""||sessionStorage.getItem("loginusername")==null){
      this.props.history.push("/Login")
    }
    setTimeout(()=>(this.getAppointments(),this.setState({loading:false})),2500)
    ;
  }
  getAppointments(){
    fetch("http://localhost:3001/appointments").then(res=>res.json()).then((result)=>this.setState({
      appointments:result
    }))
  }
  EditHandler(id){
    this.props.history.push(`/Appointments/Update/${id}`)
  }
  render() {
    return (
     
      <div id="wrapper">
      <Sidebar/>
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
    <Header/>
    <div className="container-fluid">
    <div style={{display:"flex",marginBottom:"20px"}}>
    <h1 className="h3 mb-2 text-gray-800" style={{flexGrow:1}}>Tables</h1>
      <Link style={{background:"green",color:"white",padding:"10px 20px",borderRadius:"5px",textDecoration:"none"}} to="/Appointments/Create">Add New</Link>
       </div>      <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                  <tr>
                  <th>Patient Email</th>
        <th>Weight</th>
        <th>Disease</th>
        <th>Age</th>
        <th>Description</th>
        <th>Date</th>
        <th>Time</th>
        <th>Actions</th>
                </tr>
                  </thead>
                  <tbody>
                  {
                    this.state.loading?
                    <tr>
                    <td colSpan="8" style={{textAlign:"center"}}>
                    <img style={{height:"50px"}} src={Spinner}/>
                    </td>
                    </tr>
                    :
                    this.state.appointments.length>0?
                    this.state.appointments.map(appointment=><tr key={appointment._id}>
                      <td>{appointment.patient_email}</td>
                      <td>{appointment.weight}</td>
                      <td>{appointment.disease}</td>
                      <td>{appointment.age}</td>
                      <td>{appointment.description}</td>
                      <td>{appointment.chosenDate}</td>
                      <td>{appointment.time_slot}</td>
                      <td> 
                      <button onClick={()=>this.EditHandler(appointment._id)} style={{marginRight:"5px"}} type="button" className="btn btn-primary">Ediit</button>
                      <button onClick={this.deletehandler} type="button" id={appointment._id} className="btn btn-danger">Delete</button>
                      </td>
                       </tr>)
         :
         <tr>
           <td colSpan="8" style={{textAlign:"center"}}>No Record Found</td>
         </tr>
    }
                 </tbody>
                </table>
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
