import React, { Component } from 'react'
import Sidebar from "../../../Components/Sidebar"
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
export default class View extends Component {
    constructor(props){
        super(props);
        this.state={
          id:null,
            name:""
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
    componentDidMount(){
      var href=this.props.location.pathname;
      var array=href.split("/");
      var id=array[3];
      this.setState({
        id:id,
        name:""
      })
      fetch(`http://localhost:3001/doctorcategories/Update/${id}`).then(res=>res.json()).then((result)=>this.setState({
      name:result.title
    }))
    }
    handleSubmit(e){
      e.preventDefault();
      fetch(`http://localhost:3001/doctorcategories/Update/${this.state.id}`,{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method:'POST',
            body: JSON.stringify({title:this.state.name})
          }).then(respons=>console.log(respons))
        this.props.history.push("/DoctorCategories")
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
              <h6 className="m-0 font-weight-bold text-primary">Update Category</h6>
            </div>
            <div className="card-body">
            <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div className="form-group">
          <label className="control-label col-sm-2">Weight:</label>
          <div className="col-sm-10">
            <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control"  placeholder="Enter name" name="name"/>
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
