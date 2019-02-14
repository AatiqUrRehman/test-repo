import React, { Component } from 'react'
import Sidebar from "../../Components/Sidebar"
import Header from '../../Components/Header';
import Spinner from "../../Spinner.gif"
import Footer from '../../Components/Footer';
import {Link} from "react-router-dom"

export default class view extends Component {
  constructor(props){
    super(props);
    this.state={
      loading:true,
      DoctorAtHomes:[]
    }
    this.deletehandler=this.deletehandler.bind(this);
  }
  deletehandler(id){
    fetch(`http://localhost:3001/doctorAtHomes/${id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: id})
    }).then(result=>{
      this.getDoctorAtHomes();
    });
  }
  componentWillMount(){
    if(sessionStorage.getItem("loginusername")===""||sessionStorage.getItem("loginusername")==null){
      this.props.history.push("/Login")
    }
    setTimeout(()=>(this.getDoctorAtHomes(),this.setState({loading:false})),2500)
  }
  getDoctorAtHomes(){
    fetch("http://localhost:3001/doctorAtHomes").then(res=>res.json()).then((result)=>this.setState({
      DoctorAtHomes:result
    }))
  }
  EditHandler(id){
    this.props.history.push(`/DoctorAtHomes/Update/${id}`)
  }
  render() {
    console.log(this.state)
    return (
      <div id="wrapper">
      <Sidebar/>
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
    <Header/>
    <div className="container-fluid">
    <div style={{display:"flex",marginBottom:"20px"}}>
    <h1 className="h3 mb-2 text-gray-800" style={{flexGrow:1}}>Tables</h1>
      <Link style={{background:"green",color:"white",padding:"10px 20px",borderRadius:"5px",textDecoration:"none"}} to="/DoctorAtHomes/Create">Add New</Link>
       </div>
        <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                  <tr>
                  <th>Patient Email</th>
                  <th>Age</th>
                  <th>Disease</th>
                  <th>Description</th>
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
                    this.state.DoctorAtHomes.length>0?
         this.state.DoctorAtHomes.map(
        doctoratHome=>(
        <tr key={doctoratHome._id}>
        <td>{doctoratHome.patient_email}</td>
        <td>{doctoratHome.age}</td>
        <td>{doctoratHome.disease}</td>
        <td>{doctoratHome.description}</td>
        <td> <button onClick={()=>this.EditHandler(doctoratHome._id)} style={{marginRight:"5px"}} type="button" className="btn btn-primary">Ediit</button>
        <button onClick={()=>this.deletehandler(doctoratHome._id)} id={doctoratHome.id} type="button" className="btn btn-danger">Delete</button>
        </td>
         </tr>))
         :
         <tr>
           <td colSpan="6" style={{textAlign:"center"}}>No Record Found</td>
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
