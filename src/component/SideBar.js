import React,{Component} from "react";
export default class SideBar extends Component {
  state = {
    user:JSON.parse(localStorage.getItem("user"))
  }
  componentDidMount() {
     this.setState(JSON.parse(localStorage.getItem("user")))
     console.log(this.state.user.role)

    }
    render(){
        return(
         
                <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
          <img src="img/logo/logo2.png"/>
        </div>
        <div className="sidebar-brand-text mx-3">RuangAdmin</div>
      </a>
      <hr className="sidebar-divider my-0"/>
      {this.state.user.role === "admin"?
     <>
      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
      </li>
      <hr className="sidebar-divider"/>
      </>
      :<>
      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Shortcuts</span></a>
      </li>
      <hr className="sidebar-divider"/>
      </>}
      {this.state.user.role === "admin"?
     <>
     <div className="sidebar-heading">
      Management
      </div>
      <li className="nav-item">
        <a className="nav-link" href="/user-service">
          <i className="fas fa-fw  fa-solid fa-user"></i>
          <span>Users</span>
        </a>
      </li>
      <hr className="sidebar-divider"/>
      </>
      :<>
      
      </>}
      
      <div className="sidebar-heading">
        Services
      </div>
      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap"
          aria-expanded="true" aria-controls="collapseBootstrap">
          <i className="far fa-fw fa-window-maximize"></i>
          <span>Electro Water Services</span>
        </a>
        <div id="collapseBootstrap" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Electro Water Services</h6>
            <a className="collapse-item" href="/water-service">Water Service</a>
            <a className="collapse-item" href="/electric-service">Electro Service</a>
           
          </div>
        </div>
      </li> 
      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseForm" aria-expanded="true"
          aria-controls="collapseForm">
          <i className="fab fa-fw fa-wpforms"></i>
          <span>Phones services</span>
        </a>
        <div id="collapseForm" className="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Forms</h6>
            <a className="collapse-item" href="abonnement-service">Subscription service</a>
            <a className="collapse-item" href="recharge-service">Reloads service</a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap22"
          aria-expanded="true" aria-controls="collapseBootstrap">
          <i className="far fa-fw fa-window-maximize"></i>
          <span>School Service</span>
        </a>
        <div id="collapseBootstrap22" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">School service</h6>
            <a className="collapse-item" href="/registrations">School Fees service</a>
            <a className="collapse-item" href="/universities">university service</a>
           
          </div>
        </div>
      </li>  
      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTable" aria-expanded="true"
          aria-controls="collapseTable">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </a>
        <div id="collapseTable" className="collapse" aria-labelledby="headingTable" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Tables</h6>
            <a className="collapse-item" href="simple-tables.html">Simple Tables</a>
            <a className="collapse-item" href="datatables.html">DataTables</a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="ui-colors.html">
          <i className="fas fa-fw fa-palette"></i>
          <span>UI Colors</span>
        </a>
      </li>
      <hr className="sidebar-divider"/>
      <div className="sidebar-heading">
        Examples
      </div>
      <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePage" aria-expanded="true"
          aria-controls="collapsePage">
          <i className="fas fa-fw fa-columns"></i>
          <span>Pages</span>
        </a>
        <div id="collapsePage" className="collapse" aria-labelledby="headingPage" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Example Pages</h6>
            <a className="collapse-item" href="login.html">Login</a>
            <a className="collapse-item" href="register.html">Register</a>
            <a className="collapse-item" href="404.html">404 Page</a>
            <a className="collapse-item" href="blank.html">Blank Page</a>
          </div>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </a>
      </li>
      <hr className="sidebar-divider"/>
      <div className="version" id="version-ruangadmin"></div>
    </ul>
   
        );
    }
}