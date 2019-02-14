import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import Sidebar from '../../../Components/Sidebar'
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
 class view extends Component {
    constructor(props){
        super(props);
        this.state={
          id:null,
          patient_email:"",
            weight:"",
            disease:"",
            age:"",
            description:"",
            date:"",
            time:""
        }
        this.handleChange=this.handleChange.bind(this);
    }
    componentDidMount(){
      var href=this.props.location.pathname;
      var array=href.split("/");
      var id=array[3];
      this.setState({
        id:id
      })
      fetch(`http://localhost:3001/appointments/Update/${id}`).then(res=>res.json()).then((result)=>this.setState({
      age:result.age,
      weight:result.weight,
      description:result.description,
      patient_email:result.patient_email,
      disease:result.disease
    }))
    }
    componentWillMount(){
      if(sessionStorage.getItem("loginusername")===""||sessionStorage.getItem("loginusername")==null){
        this.props.history.push("/Login")
      }
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
          fetch(`http://localhost:3001/appointments/update/${this.state.id}`,{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method:'POST',
            body: JSON.stringify({weight:this.state.weight,disease:this.state.disease,age:this.state.age,description:this.state.description})
          }).then(respons=>console.log(respons))
        this.props.history.push("/Appointments")
    
        
    }
    checkstatenull(){
        if(this.state.weight!==""||this.state.weight.length<=0
        &&this.state.age!==""||this.state.age.length<=0
        &&this.state.disease!==""||this.state.disease.length<=0
        &&this.state.description!==""||this.state.description.length<=0
        ){
            return true
        }
        else{
            return false
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
          <label className="control-label col-sm-2">patient Email:</label>
          <div className="col-sm-10">
            <input type="text" onChange={this.handleChange} value={this.state.patient_email} className="form-control"  placeholder="Enter Weight" name="patient_email"/>
          </div>
        </div>
      <div className="form-group">
          <label className="control-label col-sm-2">Weight:</label>
          <div className="col-sm-10">
            <input type="text" onChange={this.handleChange} value={this.state.weight} className="form-control" id="name" placeholder="Enter Weight" name="weight"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Disease:</label>
          <div className="col-sm-10">
            <input type="text" onChange={this.handleChange} value={this.state.disease} className="form-control" id="email" placeholder="Enter Disease" name="disease"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Age:</label>
          <div className="col-sm-10">          
            <input type="text" onChange={this.handleChange} value={this.state.age} className="form-control" id="pwd" placeholder="Enter Age" name="age"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Description:</label>
          <div className="col-sm-10">          
            <input type="text" onChange={this.handleChange} value={this.state.description} className="form-control"  placeholder="Enter Description" name="description"/>
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
export default withRouter(view);