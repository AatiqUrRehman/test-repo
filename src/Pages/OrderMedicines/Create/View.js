import React, { Component } from 'react'
import Sidebar from "../../../Components/Sidebar"
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
export default class View extends Component {
    constructor(props){
        super(props);
        this.state={
            useremail:"",
            quantity:"",
            medId:"",
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
      fetch("http://localhost:3001/orderMedicines",{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method:'POST',
            body: JSON.stringify({useremail:this.state.useremail,quantity:this.state.quantity,medId:this.state.medId})
          }).then(respons=>console.log(respons))
        this.props.history.push("/OrdeMedicines")
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
              <h6 className="m-0 font-weight-bold text-primary">Create OrderMedicine</h6>
            </div>
            <div className="card-body">
            <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div className="form-group">
          <label className="control-label col-sm-2">UserEmail:</label>
          <div className="col-sm-10">
            <input type="text" onChange={this.handleChange} className="form-control"  placeholder="Enter Weight" name="useremail"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Quantity:</label>
          <div className="col-sm-10">
            <input type="text" onChange={this.handleChange} className="form-control"  placeholder="Enter Disease" name="quantity"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" >Medicine:</label>
          <div className="col-sm-10">          
            <input type="text" onChange={this.handleChange} className="form-control" id="pwd" placeholder="Enter Age" name="medId"/>
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
