import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Auth/Login"
import DoctorDetails from "./Pages/DoctorDetails"
import Patients from "./Pages/Patients"
import DoctorCategories from "./Pages/DoctorCategories"
import CreateAppointment from "./Pages/Appointments/Create"
import createDoctorCategory from "./Pages/DoctorCategories/Create"
import CreatePatient from "./Pages/Patients/Create"
import CreateOrderMedicine from "./Pages/OrderMedicines/Create"
import createDoctorAtHome from "./Pages/DoctorAtHomes/Create"
import MedicneUpdate from "./Pages/Medicnes/Update"
import DoctorCategoryUpdate from "./Pages/DoctorCategories/Update"
import DoctorDetailUpdate from "./Pages/DoctorDetails/Update"
import PatientUpdate from "./Pages/Patients/Update"
import OrderMedicineUpdate from "./Pages/OrderMedicines/Update"
import AppointmentUpdate from "./Pages/Appointments/Update"
import createMedicine from "./Pages/Medicnes/Create"
import DoctorAtHomeUpdate from "./Pages/DoctorAtHomes/Update";
import createDoctorDetails from "./Pages/DoctorDetails/Create"
import DoctorAtHomes from "./Pages/DoctorAtHomes"
import OrderMedicines from "./Pages/OrderMedicines"
import Medicnes from "./Pages/Medicnes"
import Appointments from './Pages/Appointments';
import WeeklyOrders from "./Pages/OrderMedicines/WeeklyOrders"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/DoctorCategories" component={DoctorCategories}/>
        <Route exact path="/DoctorDetails" component={DoctorDetails}/>
        <Route exact path="/Patients" component={Patients}/>
        <Route exact path="/OrdeMedicines" component={OrderMedicines}/>
        <Route exact path="/DoctorAtHomes" component={DoctorAtHomes}/>
        <Route exact path="/Medicnes" component={Medicnes}/>
        <Route exact path="/Medicnes/Update/:id" component={MedicneUpdate}/>
        <Route exact path="/Appointments" component={Appointments}/>
        <Route exact path="/Appointments/Create" component={CreateAppointment}/>
        <Route exact path="/Appointments/Update/:id" component={AppointmentUpdate}/>
        <Route exact path="/WeeklyOrders" component={WeeklyOrders}></Route>
        <Route exact path="/Patients/Create" component={CreatePatient}></Route>
        <Route exact path="/Patients/Update/:id" component={PatientUpdate}></Route>
        <Route exact path="/DoctorCategories/Create" component={createDoctorCategory}></Route>
        <Route exact path="/DoctorCategories/Update/:id" component={DoctorCategoryUpdate}></Route>
        <Route exact path="/OrdeMedicines/Create" component={CreateOrderMedicine}></Route>
        <Route exact path="/OrdeMedicines/Update/:id" component={OrderMedicineUpdate}></Route>
        <Route exact path="/DoctorAtHomes/Create" component={createDoctorAtHome}></Route>
        <Route exact path="/DoctorDetails/Create" component={createDoctorDetails}></Route>
        <Route exact path="/DoctorDetails/Update/:id" component={DoctorDetailUpdate}></Route>
        <Route exact path="/Medicines/Create" component={createMedicine}></Route>

        <Route exact path="/DoctorAtHomes/Update/:id" component={DoctorAtHomeUpdate}></Route>
      </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
