import ClientBar from "../navbar/sidebar";
import "./home.css";
import './card.css';
import ClientHeader from "./header";
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { Pie } from "@nivo/pie";
import { ThemeProvider, SvgWrapper } from "@nivo/core";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { FaSearch } from "react-icons/fa";
import {Card, Col, Row, Table} from 'react-bootstrap';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let data = [
  {
    id: "Item1",
    value: 410,
    color: "#618B25",
  },
  {
    id: "Item2",
    value: 175,
    color: "#C0F8D1",
  },
  {
    id: "Item3",
    value: 128,
    color: "hsl(140, 18%, 16%)",
  },
];

export default function ClientHome() {
  


  const datal = {
    labels: ["Item 1", "Item 2"],
    datasets: [
      {
        label: "Item 1",
        data: [82, 100],
        borderColor: "black",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Item 2",
        data: [40, 80],
        borderColor: "black",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <section id="client-cont">
      <ClientBar />
     

      <section id="client-home">
     
        <ClientHeader message="Here is a breakdown of your organisation." />
        <div id="client-home-heading-container">
        
        <h4 className="greeting">{greeting()},<span> Sally</span></h4>
        <h6>Here is a breakdown of your organisation.</h6>
        
        </div>
      
        <div  id="client-home-employees">

          <div className="card-container d-flex flex-row">
           <div  class="row">
            <div class="col-md-6" >
           <Card className="my-card" >
          <Card.Body>
        <Card.Title className="my-card-title">Total Employees</Card.Title>
        <Card.Text className="my-card-text">
          1000
          
        </Card.Text>
        <Card.Text   >
         <p className="sts-down">
                <RiArrowDownSLine />
                8.5%
              </p>
             
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
   
  <div class='row'>
    <div class="col-md-6">
<Card className="my-card" >
      <Card.Body>
        <Card.Title className="my-card-title">Total Payout</Card.Title>
        <Card.Text className="my-card-text">
          1000
          
        </Card.Text>
        <Card.Text >
          <span>
          <p className="sts-up">
                <RiArrowUpSLine />
                8.5%
              </p>
              </span>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    <div class="row">
      <div class="col-md-6">
 <Card className="my-card" >
      <Card.Body>
        <Card.Title className="my-card-title">Total Attendance</Card.Title>
        <Card.Text className="my-card-text">
          1000
          
        </Card.Text>
        <Card.Text >
        <p className="sts-down">
                <RiArrowDownSLine />
                8.5%
              </p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    </div>
  
   
           <Card className="my-card" >
      <Card.Body>
        <Card.Title className="my-card-title">Total Deductions</Card.Title>
        <Card.Text className="my-card-text">
          1000
          
        </Card.Text>
        <Card.Text >
        <p className="sts-up">
                <RiArrowUpSLine />
                8.5%
              </p>
        </Card.Text>
      </Card.Body>
    </Card>
  
   
    </div>
        </div>

        <div id="client-home-chart">
          <div id="client-home-bar">
            {/* <p className="client-home-chart-title">Deductions and Net pay</p> */}

            <div >
           
   <Card className="client-home-bar-card">
  <Card.Title className="client-home-bar-title"> Deductions and Net pay</Card.Title>
              <Bar className="client-home-bar-details"
                data={datal}
                options={{
                  responsive: true,
                }}
                width={550}
                height={300}
                margin={{
                  top: 40,
                  right: 80,
                  bottom: 180,
                  left: 280,
                }}
              />
              </Card>
             
            </div>
           
          </div>
          <div id="client-home-pie">
           
            {/* <p className="client-home-chart-title">Gender balance</p> */}
            <div>
             <Col>
            <Card className="client-home-pie-card">
              <Card.Title className="client-home-pie-title">
              Gender balance
              </Card.Title>
              <Pie
                width={550}
                height={290}
                data={data}
                margin={{
                  top: 40,
                  right: 80,
                  bottom: 80,
                  left: 280,
                }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                borderColor="inherit:darker(0.6)"
                className="nivo-pie"
              />
               <ThemeProvider>
                <SvgWrapper
                  height={-30}
                  width={20}
                  margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                ></SvgWrapper>
              </ThemeProvider>
</Card>
</Col>
             
            </div>
          </div>
        </div>

        <div id="client-home-emps">
          <div id="client-home-emps-header">
            <h3>Employee Status</h3>
            <form id="client-home-emps-form">
              <FaSearch  className="client-home-emps-form-search"/>
              <input type="text" placeholder="search" />
            </form>
          </div>

          <Row className=" client-table mt-5 sidecontent">
                <Col md={10}>
                  <Table className="client-home-emp-table">
                    <thead className="client-home-emp-title">
                      <tr>
                        <th ><span className="client-home-emps-number">Employee no.</span>
                                                                                            </th>
                        <th><span className="client-home-emps-name">Employee Name</span>
                        </th>
                        <th><span className="client-home-emps-sex">Gender</span>
                        </th>
                        <th><span className="client-home-emps-days">Total days</span>
                        </th>
                        <th><span className="client-home-emps-missed">Days Missed</span>
                        </th>
                        <th><span className="client-home-emps-gross">Total gross Earnings</span>
                        </th>           
                        <th><span className="client-home-emps-net">Total Net Earnings</span>
          
                                                                                                                                                                                                                                                                             </th>
                      </tr>
                    </thead>
                    <tbody className="client-home-emp-details">
                      <tr>
                        <td >
                        <span className="client-home-emps-number">22</span>

                          </td>
                          <td>
                          <span className="client-home-emps-name">Enock MOkua</span>

                          </td>
                          <td>
                          <span className="client-home-emps-name">M</span>

                            </td>
                            <td>
                            <span className="client-home-emps-days">123</span>

                            </td>
                            <td>
                            <span className="client-home-emps-missed">9</span>

                            </td>
                            <td>
                            <span className="client-home-emps-missed">10900</span>

                            </td>
                           
                            <td>
                            <span className="client-home-emps-net">7000</span>

                            </td>

                            
                          </tr>
                          <tr>
                          <td>
                        <span className="client-home-emps-number">23</span>

                          </td>
                          <td>
                          <span className="client-home-emps-name">Sindy Jones</span>

                          </td>
                          <td>
                          <span className="client-home-emps-name">F</span>

                            </td>
                            <td>
                            <span className="client-home-emps-days">124</span>

                            </td>
                            <td>
                            <span className="client-home-emps-missed">7</span>

                            </td>
                            <td>
                            <span className="client-home-emps-missed">11000</span>

                            </td>
                           
                            <td>
                            <span className="client-home-emps-net">5000</span>

                            </td>
                            </tr>
                     
                    </tbody>
</Table>
</Col>
</Row>
          {/* <div id="client-home-emps-head">
            <span className="client-home-emps-number">Employee no.</span>
            <span className="client-home-emps-name">Employee Name</span>
            <span className="client-home-emps-sex">Gender</span>
            <span className="client-home-emps-days">Total days</span>
            <span className="client-home-emps-missed">Days Missed</span>
            <span className="client-home-emps-gross">Total gross Earnings</span>
            <span className="client-home-emps-net">Total Net Earnings</span>
          </div> */}
</div>
         
    
      </section>
    </section>
  );
}

 /*
    * * Previous Code
    
          {/* <span className="client-home-employees">
            <p>Total Employees</p>
            <span>
              <p>1000</p>
              <p className="sts-down">
                <RiArrowDownSLine />
                8.5%
              </p>
            </span>
          </span> */
           /* 
    * * Previous Code 
          {/* <span className="client-home-employees">
            <p>Total attendance</p>
            <span>
              <p>1000</p>
              <p className="sts-down">
                <RiArrowDownSLine />
                8.5%
              </p>
            </span>
          </span> */
          /*
* * Previous Code
          {/* <span className="client-home-employees">
            <p>Total deductions</p>
            <span>
              <p>1000</p>
              <p className="sts-up">
                <RiArrowUpSLine />
                8.5%
              </p>
            </span>
          </span> */
          
          /*
    * * Previous Code
          {/* <span className="client-home-employees">
            <p>Total Payout</p>
            <span>
              <p>1000</p>
              <p className="sts-up">
                <RiArrowUpSLine />
                8.5%
              </p>
            </span>
          </span> */
          
      //     <div className="client-home-emps-child">
      //     <span className="client-home-emps-number">22</span>
      //     <span className="client-home-emps-name">Enock MOkua</span>
      //     <span className="client-home-emps-name">Enock MOkua</span>
      //     <span className="client-home-emps-days">123</span>
      //     <span className="client-home-emps-missed">9</span>
      //     <span className="client-home-emps-gross">10900</span>
      //     <span className="client-home-emps-net">7000</span>
      //   </div>
    