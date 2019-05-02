import React, { Component } from 'react'
import Spinner from "../../Spinner.gif"
import Sidebar from "../../Components/Sidebar"
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import {Link} from "react-router-dom"

export default class WeeklyOrders extends Component {
  constructor(props){
    super(props);
    this.state={
      loading:true,
      OrderMedicines:[]
    }
  }
  componentWillMount(){
    if(sessionStorage.getItem("loginusername")===""||sessionStorage.getItem("loginusername")==null){
      this.props.history.push("/Login")
    }
    setTimeout(()=>(this.getOrderMedicines(),this.setState({loading:false})),3500)
  }
  getOrderMedicines(){
    fetch("http://localhost:3001/orderMedicines/weeklyorders").then(res=>res.json()).then((result)=>this.setState({
      OrderMedicines:result
    }))
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
       </div>
        <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Weekly Orders</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                  <tr>
                  <th>User Email</th>
                  <th>Quantity</th>
                  <th>MedicineId</th>
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
                    this.state.OrderMedicines.length>0?
         this.state.OrderMedicines.map(
        ordermedicine=>(
        <tr key={ordermedicine._id}>
        <td>{ordermedicine.user_email}</td>
        <td>{ordermedicine.quantity}</td>
        <td>{ordermedicine.medId}</td>
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
