import React, { Component } from 'react'
export default class view extends Component {
  constructor(props){
super(props);
this.state={
  users:[
{name:"admin",password:"admin",email:"admin@admin.com"},
{name:"Atiq",password:"Atiq",email:"example@admin.com"}
  ],
  password:"",
  email:"",
  loginerror:false
}
  }
  changehandler(e){
this.setState({
  [e.target.name]:e.target.value
})
  }
  submithandler(e){
    e.preventDefault();
   var user=this.state.users.filter(user=>user.email===this.state.email&&user.password===this.state.password);
   if(user.length===0){
     this.setState({
       loginerror:true
     })
   }else{
     this.setState({
       name:"",
       email:"",
       loginerror:false
     })
     sessionStorage.setItem("loginusername",user[0].name)
    this.props.history.push("/");
  }
  }
  render() {
    return (
      <div className="container">

    <div className="row justify-content-center">

      <div className="col-xl-10 col-lg-12 col-md-9">
      <div className="card o-hidden border-0 shadow-lg my-5" style={{marginTop:"120px !important"}}>
      <div className="card-body p-0">
            <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
            <div className="p-5">
            <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  {
                    this.state.loginerror &&
                    <div className="alert alert-danger">
                    <strong>Error!</strong> Invalid username or password
                  </div>
                  }
                
                    <form className="user" onSubmit={this.submithandler.bind(this)}>
                    <div className="form-group">
                      <input type="email" className="form-control form-control-user" name="email" onChange={this.changehandler.bind(this)} placeholder="Enter Email Address..."/>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-user" onChange={this.changehandler.bind(this)} name="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input type="checkbox" className="custom-control-input" id="customCheck"/>
                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                      </div>
                    </div>
                    <input  type="submit" className="btn btn-primary btn-user btn-block" value="Login"></input>
                    <hr/>
                 </form>
            </div>
            </div>
            </div>
            </div>

      </div>

        </div>

    </div>

  </div>

    )
  }
}
