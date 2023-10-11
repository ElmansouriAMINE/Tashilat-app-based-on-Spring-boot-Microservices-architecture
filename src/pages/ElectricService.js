import React,{Component} from "react";
import axios from 'axios'; 
import Checkout from '../component/Checkout'
import $ from 'jquery'; 


export default class ElectricService extends Component {
  state = {
    factures: [],
    rowId:"",
    month:"",
    year:"",
    montant:"",
    type:"",
    factureId : "",
    user :JSON.parse(localStorage.getItem("user"))
  }
  componentDidMount() {
    this.setState ({ user: JSON.parse(localStorage.getItem("user"))})
  }
  updateRowId(props){
    this.setState({rowId:props.id }) 
    this.setState({month:props.month }) 
    this.setState({year:props.year }) 
    this.setState({montant:props.montant }) 
    this.setState({type:props.type }) 
  }
  callPopUp(){
    return  <Checkout name = {this.state.rowId} cm={0} year = {this.state.year} month = {this.state.month} montant = {this.state.montant} type = {this.state.type}/>
  }

      testButton =function(event){
        alert("Value of data-val here " + event.target.getAttribute("data-value")); 
        document.getElementById("test").style.background="red"
    }
//componentDidMount(){
  //document.getElementById("test").style.background="red"
//}
    // componentDidMount() {
    //   $(document).ready(function () {
    //     $('#dataTableHover').DataTable();
    //     // ID From dataTable with Hover
    //   });
    // }
    handleDelete() { 
    
       axios({
         // Endpoint to send files
         url: "http://localhost:8080/water/delete facture/"+this.state.rowId,
         method: "DELETE",
         })
     
         // Handle the response from backend here
         .then((res) => { 
          if(res.data ===""){
            document.getElementById("error").style.display="block"
            setTimeout(() => {
              document.getElementById("error").style.display="none"
          },2000);
          }else{
            this.setState({ factures: res.data }) 
          }
             
             // $('#dataTableHover').DataTable().destroy(); 
              // ID From dataTable with Hover
            
         })
     
         // Catch errors if any
         .catch((err) => { 
          
           
         });

       
   }
    handleUpload() { 
       this.setState ({ factureId: document.getElementById('factureId').value },()=>{
        console.log( this.state.factureId)
        axios({
          // Endpoint to send files
          url: "http://localhost:8080/water/factures/"+this.state.factureId,
          method: "GET",
          })
      
          // Handle the response from backend here
          .then((res) => { 
              console.log(res.data); 
              this.setState({ factures: res.data }) 
              // $('#dataTableHover').DataTable().destroy(); 
               // ID From dataTable with Hover
             
          })
      
          // Catch errors if any
          .catch((err) => { 
            this.setState({ factures: [] }) 
          });
       })
      
        
    }
    handleUploadP() { 
      axios({
  
      // Endpoint to send files
      url: "http://localhost:8080/electric/paye/"+this.state.factureId,
      method: "GET",
      })
  
      // Handle the response from backend here
      .then((res) => { 
          console.log(res.data);  
          this.setState({ factures: res.data })  
           // ID From dataTable with Hover
         
      })
  
      // Catch errors if any
      .catch((err) => { });
  }
  handleUploadNonP() { 
    axios({

    // Endpoint to send files
    url: "http://localhost:8080/electric/non paye/"+this.state.factureId,
    method: "GET",
    })

    // Handle the response from backend here
    .then((res) => { 
        console.log(res.data);  
        this.setState({ factures: res.data })  
         // ID From dataTable with Hover
       
    })

    // Catch errors if any
    .catch((err) => { });
}
    
  
    render(){
        return(<>
        
        <div style={{display:"none"}}  class="alert alert-danger alert-dismissible fade show" role="alert" id="error">
                    
                    <h6><i class="fas fa-ban"></i><b> illegal operation !</b></h6>
                    you cannot delete a bill not payed!
        </div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Electricity Service</h1>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="./">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Electro Water Services</li>
              <li class="breadcrumb-item active" aria-current="page">Electric Service</li>
            </ol>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="card mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-center" >
                  <form className="navbar-search" style={{width:"70%"}}>
                  <div className="input-group" >
                    <input type="text" className="form-control bg-light border-1 small" placeholder="What do you want to look for?"
                      aria-label="Search" aria-describedby="basic-addon2"  sx={{borderColor: "#3f51b5;",width:"100%"}} id="factureId"/>
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button" onClick={(e) => this.handleUpload()}>
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
                
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content" id="yarbi">
                <div class="modal-body">
                 {this.callPopUp()}
                </div>
              </div>
            </div>
          </div>
          
                
          <div class="modal fade" id="delete" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">Are you sure you want to delete this facture?</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
               
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-danger mb-1 " data-dismiss="modal" onClick={(e) => this.handleDelete()}>Confirme</button>
                </div>
              </div>
            </div>
          </div>
                
                
                {
                  this.state.factures.length == 0? <></> : <div class="btn-group dropup" style={{width:"10%",marginLeft:"20px"}}>
                  <div class="btn-group dropup" style={{width:"10%",marginLeft:"20px"}}>
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">
                          Select etat
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" onClick={(e) => this.handleUploadP()}>Paye</a>
                          <a class="dropdown-item" onClick={(e) => this.handleUploadNonP()}>Non Paye</a>
                          <a class="dropdown-item" onClick={(e) => this.handleUpload()}>Tous</a>
                        </div>
                      </div>
          </div>
                }
                </div>
                
                <div class="table-responsive p-3">
                  <table class="table align-items-center table-flush table-hover" id="dataTableHover">
                    <thead class="thead-light">
                      <tr>
                        <th>month</th>
                        <th>year</th>
                        <th>montant</th>
                        <th>type</th>
                        <th>date Payement</th>
                        <th>etat</th>
                        <th >Action</th>
                      </tr>
                    </thead>
                    
                    <tbody>
                   
                    {
                    this.state.factures.map((facture) => (
                        <tr key={facture.id}>
                        <td>{facture.month}</td>
                        <td>{facture.year}</td>
                        <td>{facture.montant}</td>
                        <td>{facture.type}</td>
                        <td>{facture.datePayement}</td>
                        {facture.etat!=="Non paye"? <td><span class="badge badge-success" style={{padding:"5px"}}>{facture.etat}</span></td> : <td><span class="badge badge-danger" style={{padding:"5px"}}>{facture.etat}</span></td>}
                        {facture.etat=="Non paye"?<button type="button" data-toggle="modal" data-target="#exampleModalCenter" class="btn btn-success mb-1" style={{margin:"5px"}}  onClick={(e) =>{this.updateRowId(facture)}}><i class="fas fa-check"></i></button>:<></>}
                        {this.state.user.role == "admin"? <button type="button" class="btn btn-danger mb-1 " data-toggle="modal" data-target="#delete" style={{margin:"5px"}} onClick={(e) =>{this.updateRowId(facture)}}><i class="fas fa-trash"></i></button>:<></>}
                        
                        

                      </tr>
                      
))
                    }
                     
                    </tbody>
                  </table>
                  
                </div>
              </div>
            </div>
          </div>


          









          
          
        </>)
        
    }

}

       