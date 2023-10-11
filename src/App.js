
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import SideBar from './component/SideBar';
import NavBar from './component/NavBar';
import WaterService from './pages/WaterService';
import ElectricService from './pages/ElectricService';
import Checkout from './component/Checkout'
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/error'; 
import Error404 from './pages/error404';
import AdminDashboard from './pages/AdmineDashboard';
import AgentDashboard from './pages/AgentDashboard'; 
import UserServices from './pages/UserServices';
import WaterCharts from './pages/WaterCharts';
import Statistiques from './pages/Statistiques';
import ListRegistration from "./pages/registration/ListRegistration";
import ListeUniversities from "./pages/registration/ListeUniversities";
import CreateUniversity from "./pages/registration/CreateUniversity";






import UserCharts from './pages/UserCharts'
import RechargeCharts from './pages/RechargeCharts';
import AbonnementService from './pages/AbonnementService';
import RechargeService from './pages/RechargeService';


import CreateRegistration from "./pages/registration/CreateRegistration";
import UpdateRegistration from "./pages/registration/UpdateRegistration";
import ListePayments from "./pages/registration/ListePayments";
import SchoolFeesStatistics from './pages/registration/SchoolFeesStatistics';
export default class App extends Component {
    state = {
        user :JSON.parse(localStorage.getItem("user"))
      }
      logOut(){
        localStorage.removeItem("user")
      }
      componentDidMount() {
        this.setState ({ user: JSON.parse(localStorage.getItem("user"))})
      }
    render() {
      if(this.state.user == null){
        return (
            <>
            <Routes>
                <Route path='*' exact={true} element={<Error/>} />
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>  
        </>

        )}else{
          
            return (
           
                <>
                
                <div id="wrapper">
                <SideBar/>
                
                <div  id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <NavBar/>
                        
                        <div class="container-fluid" id="container-wrapper">
                        <div class="container-fluid" id="container-wrapper">
                        <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelLogout"
                            aria-hidden="true">
                            <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabelLogout">Ohh No!</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body">
                                <p>Are you sure you want to logout?</p>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Cancel</button>
                                <a href="/" class="btn btn-primary" onClick={(e) => this.logOut()}>Logout</a>
                                </div>
                            </div>
                            </div>
                        </div>
          
                        </div>
                        <Routes>
                            <Route path='*' exact={true} element={<Error404/>} />
                            {this.state.user.role == "admin"?<Route path="/" element={<AdminDashboard/>} />:<Route path="/" element={<AgentDashboard/>} />}
                            {this.state.user.role == "admin"? <Route path="/user-service" element={<UserServices/>}/>:<Route path='*' exact={true} element={<Error404/>} />}
                            {this.state.user.role == "admin"? <Route path="/statistics" element={<WaterCharts/>}/>:<Route path='*' exact={true} element={<Error404/>} />}
                            {this.state.user.role == "admin"? <Route path="/statistic" element={<Statistiques/>}/>:<Route path='*' exact={true} element={<Error404/>} />}
                            {this.state.user.role == "admin"? <Route path="/water statistics" element={<WaterCharts/>}/>:<Route path='*' exact={true} element={<Error404/>} />}
                            {this.state.user.role == "admin"? <Route path="/school-fees-statistic" element={<SchoolFeesStatistics/>}/>:<Route path='*' exact={true} element={<Error404/>} />}
                            {this.state.user.role == "admin"? <Route path="/user statistic" element={<UserCharts/>}/>:<Route path='*' exact={true} element={<Error404/>} />}
                           


                            {/*  */}
                            {this.state.user.role == "admin"? <Route path="/recharge-statistics" element={<RechargeCharts/>}/>:<Route path='*' exact={true} element={<Error404/>} />}

                            <Route path="/water-service" element={<WaterService/>} />
                            <Route path="/electric-service" element={<ElectricService/>} />
                            <Route path="/abonnement-service" element={<AbonnementService/>} />
                            <Route path="/recharge-service" element={<RechargeService/>} />







                            {/*  */}
                          
                            <Route path="/addregistration" element={<CreateRegistration/>} />
                            <Route path="/updateRegistration/:id" element={UpdateRegistration} exact/>
                            {/* <Route path="/deleteRegistration/:id" exact component={ListRegistration} /> */}
                            <Route path="/registrations" element={<ListRegistration/>} />
                           

                            <Route path="/universities" element={<ListeUniversities/>} />
                            <Route path="/adduniversity" element={<CreateUniversity/>} />
                           
                        </Routes>  
                        </div>         
                    </div>
                </div>
                </div>
            </>
    
            )
        }
    }
}
                