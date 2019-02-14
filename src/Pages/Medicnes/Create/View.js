import React, { Component } from 'react'
import Sidebar from "../../../Components/Sidebar"
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
export default class View extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            type:"",
            description:"",
            expiry_date:"",
            price:"",
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
      fetch("http://localhost:3001/medicines",{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method:'POST',
            body: JSON.stringify({name:this.state.name,type:this.state.type,description:this.state.description,expiry_date:this.state.expiry_date,price:this.state.price})
          }).then(respons=>console.log(respons))
        this.props.history.push("/Medicnes")
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
              <h6 className="m-0 font-weight-bold text-primary">Create Appointment</h6>
            </div>
            <div className="card-body">
            <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div className="form-group">
          <label className="control-label col-sm-2">Name:</label>
          <div className="col-sm-10">
            <input type="text" onChange={this.handleChange} className="form-control"  placeholder="Enter Name" name="name"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Type:</label>
          <div className="col-sm-10">
            <input type="text" onChange={this.handleChange} className="form-control" placeholder="Enter Type" name="type"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Expiry Date:</label>
          <div className="col-sm-10">          
            <input type="text" onChange={this.handleChange} className="form-control"  placeholder="Enter Expiry Date" name="expiry_date"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Price:</label>
          <div className="col-sm-10">          
            <input type="text" onChange={this.handleChange} className="form-control"  placeholder="Enter Price" name="price"/>
          </div>
        </div> 
        <div className="form-group">
          <label className="control-label col-sm-2" >Description:</label>
          <div className="col-sm-10">          
            <input type="text" onChange={this.handleChange} className="form-control"  placeholder="Enter Description" name="description"/>
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
