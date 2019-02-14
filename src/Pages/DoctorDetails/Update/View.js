import React, { Component } from 'react'
import Sidebar from "../../../Components/Sidebar"
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
export default class View extends Component {
    constructor(props){
        super(props);
        this.state={
          id:null,
            name:"",
            email:"",
            phone:"",
            clinic_name:"",
            clinic_address:"",
            clinic_timing:"",
            category_id:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
      var href=this.props.location.pathname;
      var array=href.split("/");
      var id=array[3];
      this.setState({
        id:id,
        name:""
      })
      fetch(`http://localhost:3001/doctorDetails/Update/${id}`).then(res=>res.json()).then((result)=>this.setState({
      name:result.name,
      email:result.email,
      phone:result.phone,
      clinic_address:result.clinic_address,
      clinic_name:result.clinic_name,
      clinic_timing:result.clinic_timing
    }))
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(e){
      e.preventDefault();
      fetch(`http://localhost:3001/doctorDetails/Update/${this.state.id}`,{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method:'POST',
            body: JSON.stringify({name:this.state.name,email:this.state.email,phone:this.state.phone,clinic_name:this.state.clinic_name,clinic_timing:this.state.clinic_timing,clinic_address:this.state.clinic_address})
          }).then(respons=>console.log(respons))
        this.props.history.push("/DoctorDetails")
    }
    componentWillMount(){
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
    <div style={{display:"flex",marginBottom:"20px"}}>
       </div>      <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Update Appointment</h6>
            </div>
            <div className="card-body">
            <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
          <label className="control-label col-sm-2">Name:</label>
          <div className="col-sm-10">
            <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control"  placeholder="Enter Weight" name="name"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2">Email:</label>
          <div className="col-sm-10">
            <input type="text" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Enter Weight" name="email"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2">Phone:</label>
          <div className="col-sm-10">
            <input type="text" value={this.state.phone} onChange={this.handleChange} className="form-control" placeholder="Enter Weight" name="phone"/>
          </div>
        </div>
      <div className="form-group">
          <label className="control-label col-sm-2">Clinic Name:</label>
          <div className="col-sm-10">
            <input type="text" value={this.state.clinic_name} onChange={this.handleChange} className="form-control" id="name" placeholder="Enter Weight" name="clinic_name"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Clinic Address:</label>
          <div className="col-sm-10">
            <input type="text" value={this.state.clinic_address} onChange={this.handleChange} className="form-control" id="email" placeholder="Enter Disease" name="clinic_address"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Clinic Timings:</label>
          <div className="col-sm-10">          
            <input type="text" value={this.state.clinic_timing} onChange={this.handleChange} className="form-control" id="pwd" placeholder="Enter Age" name="clinic_timing"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >DoctorCategory:</label>
          <div className="col-sm-10">          
            <input type="text" onChange={this.handleChange} className="form-control"  placeholder="Enter Description" name="description"/>
          </div>
        </div>  
        <div className="form-group">        
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-primary">Update</button>
          </div>
        </div>
      </form>
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
