import React, { Component } from 'react'
import Sidebar from "../../../Components/Sidebar"
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
export default class view extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            phone:"",
            gender:"",
            profile:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentWillMount(){
      if(sessionStorage.getItem("loginusername")===""||sessionStorage.getItem("loginusername")==null){
        this.props.history.push("/Login")
      }
    }
    handleSubmit(e){
      e.preventDefault();
      fetch("http://localhost:3001/patients",{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method:'POST',
            body: JSON.stringify({name:this.state.name,email:this.state.email,password:this.state.password,gender:this.state.gender,phone:this.state.phone,profile:this.state.profile})
          }).then(respons=>console.log(respons))
        this.props.history.push("/Patients")
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
              <h6 className="m-0 font-weight-bold text-primary">Add Patient</h6>
            </div>
            <div className="card-body">
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
      <div className="form-group">
          <label className="control-label col-sm-2">Name:</label>
          <div className="col-sm-10">
            <input type="text" onChange={this.handleChange} className="form-control" id="name" placeholder="Enter name" name="name"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Email:</label>
          <div className="col-sm-10">
            <input type="email" onChange={this.handleChange} className="form-control" id="email" placeholder="Enter email" name="email"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Password:</label>
          <div className="col-sm-10">          
            <input type="password" onChange={this.handleChange} className="form-control" id="pwd" placeholder="Enter password" name="password"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Phone:</label>
          <div className="col-sm-10">          
            <input type="number" onChange={this.handleChange} className="form-control" id="phone" placeholder="Enter Phone" name="phone"/>
          </div>
        </div>
        <div className="form-group">   
        <label className="control-label col-sm-2" value="gender">Gender:</label>     
          <div className="col-sm-offset-2 col-sm-10">
          <label className="radio-inline"><input  onChange={this.handleChange} type="radio" value="Male" name="gender" checked />Male</label>
            <label className="radio-inline"><input onChange={this.handleChange} type="radio" value="Female" name="gender"/>Female</label>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Profile:</label>
          <div className="col-sm-10">          
            <input onChange={this.handleChange} type="file"  id="profile"  name="profile"/>
          </div>
        </div>
        <div className="form-group">        
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-primary">Submit</button>
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
