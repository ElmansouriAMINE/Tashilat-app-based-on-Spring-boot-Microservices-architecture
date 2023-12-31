import * as React from 'react';
import axios from 'axios'; 
import YearPicker from "react-year-picker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,

} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
export default function UserCharts(props) {
  const [adminNbr, setAdminNbr] = React.useState();
  const [agentNbr, setAgentNbr] = React.useState();
  const [activeNbr, setActiveNbr] = React.useState([]);
  const [donuChart, setDonuChart] = React.useState([]);
  const [lineChartData, setLineChartData] = React.useState([]);
  const [lineChartLabels, setLineChartLabels] = React.useState([]);
  const [barChart, setBarChart] = React.useState([]);
  const [barChartD, setBarChartD] = React.useState([]);
  const [barChartLabels, setBarChartLabels] = React.useState([]);
  const [barChartYear, setBarChartYear] = React.useState("2001");
  const [lineChartYear, setLineChartYear] = React.useState("2001");
  React.useEffect(()=>{
    loadDonutChart()
    loadLineChart()
    loadBarChart()
    loadGlobalInfo()
},[])
// lineChart 
 const LineChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
    },
  },
};
const LineChartData = {
  lineChartLabels,
  datasets: [
    {
      fill: true,
      label: 'paid',
      data: lineChartData,
      backgroundColor: "rgba(78, 115, 223, 0.5)",
      borderColor: "rgba(78, 115, 223, 1)",
    },
    {
      fill: true,
      label: 'unpaid',
      data: barChartD,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};
const loadLineChart = async()=>{
  axios({
      // Endpoint to send files
      url: "http://localhost:8083/user/line data",
      method: "GET",
      })
      // Handle the response from backend here
      .then((res) => {
        setLineChartData(res.data.data)
        setLineChartLabels(res.data.labels)
        console.log(res.data.labels)
      })
  
      // Catch errors if any
      .catch((err) => { 
       
      });
}
// donuChart
const loadDonutChart = async()=>{
  axios({
      // Endpoint to send files
      url: "http://localhost:8080/water/statistics/donut chart",
      method: "GET",
      })
      // Handle the response from backend here
      .then((res) => {
        setDonuChart(res.data)
      })
  
      // Catch errors if any
      .catch((err) => { 
       
      });
}
const donuChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
    },
  },
};
 const donuChartData = {
  labels: ['unpaid', 'paid'],
  datasets: [
    {
      label: 'number of bills',
      data: donuChart,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};

//bar chart
const barChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Turnover per month',
    },
  },
};

const barChartData = {
  
   labels,
  datasets: [
    {
      fill: true,
      label: 'turnover (Dh)',
      data: barChartD,
      backgroundColor: "rgba(78, 115, 223, 0.5)",
      borderColor: "rgba(78, 115, 223, 1)",
    },
   
  ],
};
const loadBarChart = async()=>{
  axios({
    // Endpoint to send files
    url: "http://localhost:8083/user/line data",
    method: "GET",
    })
    // Handle the response from backend here
    .then((res) => {
      setBarChartD(res.data.data)
      setBarChartLabels(res.data.labels)
    })

    // Catch errors if any
    .catch((err) => { 
     
    });
}
const handleChangeBar = (newValue)=>{
  setBarChartYear(newValue)
  console.log(newValue);
  axios({
    // Endpoint to send files
    url: "http://localhost:8080/water/statistics/bar chart/"+newValue,
    method: "GET",
    })
    // Handle the response from backend here
    .then((res) => {
      setBarChart(res.data)
    })

    // Catch errors if any
    .catch((err) => { 
     
    });
   
}
const handleChangeLine = (newValue)=>{
  setLineChartYear(newValue)
  axios({
    // Endpoint to send files
    url: "http://localhost:8080/water/statistics/line chart/"+newValue,
    method: "GET",
    })
    // Handle the response from backend here
    .then((res) => {
      
    })

    // Catch errors if any
    .catch((err) => { 
     
    });
}
const loadGlobalInfo = async()=>{
  axios({
      // Endpoint to send files
      url: "http://localhost:8083/user/global statistic",
      method: "GET",
      })
      // Handle the response from backend here
      .then((res) => {
        setActiveNbr(res.data.active)
        setAgentNbr(res.data.agent)
        setAdminNbr(res.data.admin)
      })
  
      // Catch errors if any
      .catch((err) => { 
       
      });
}

  return (<>
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Water statistics</h1>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="./">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Statistics</li>
              <li class="breadcrumb-item active" aria-current="page">User statistics</li>
            </ol>
          </div>
          <div class="row"> 
          <div class="col-lg-12">
             
          <div class="row mb-3">
          <div class="col-xl-3 col-md-6 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-uppercase mb-1">Agent</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{agentNbr}</div>
                      <div class="mt-2 mb-0 text-muted text-xs">
                        <span>Totale number of </span>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-users fa-2x text-info"></i>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-uppercase mb-1">Admin</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{adminNbr}</div>
                      <div class="mt-2 mb-0 text-muted text-xs">
                        <span>Totale number of</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-user fa-2x text-warning"></i>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-uppercase mb-1">Active</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{activeNbr}</div>
                      <div class="mt-2 mb-0 text-muted text-xs">
                        <span>Totale number of</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-circle fa-2x text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-uppercase mb-1">Services</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">4</div>
                      <div class="mt-2 mb-0 text-muted text-xs">
                        <span>Totale number of</span>
                      </div>
                    </div>
                    
                    <div class="col-auto">
                      <i class="fas fa-gear fa-2x text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div class="row"> 
          
          <div class="col-lg-8">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Turnover per month</h6>
                </div>
                <div class="card-body">
                <YearPicker 
                  onChange={(newValue) => {
                    handleChangeBar(newValue);
              }}/>
                <Bar options={barChartOptions} data={barChartData} />
                  <hr/>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Totale number of paid and unpaid bills</h6>
                </div>
                <div class="card-body">
                  <Doughnut options={donuChartOptions} data={donuChartData} />
                  <hr/>
                </div>
              </div>
            </div>
            <div class="col-lg-10" >
              <div class="card mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Number of paid and unpaid bills per month</h6>
                </div>
                
                <div class="card-body">
                <div align="right" style={{width:"100%",marginRight:"30px",zIndex:1300}} >
                    </div>
                    <YearPicker 
                  onChange={(newValue) => {
                    handleChangeLine(newValue);
              }}
                />
                  <Line options={LineChartOptions} data={LineChartData} />
                  <hr/>
                  
                </div> 
              </div>
            </div>
            </div>
            </div>
            </div>
            
  </>
 );
}
