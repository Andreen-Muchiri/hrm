import ClientHeader from "../home/header";
import ClientBar from "../navbar/sidebar";
import "./employee.css";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import DeviceMap from "./map";
import {Card, Col, Row, Table} from 'react-bootstrap';

export default function ClientEmployee() {
  return (
    <section id="client-cont">
      <ClientBar />

      <section id="client-employee">
        <ClientHeader message="Welcome to Enock's profile." />
        <div id="client-employee-container">
        <div id="client-employee-stats">
          {/* <div id="client-employee-attendace">
            <h3>March in Stats</h3>
            <div id="client-employee-attendace-cont">
              <span className="attendace-cont">
                <p>Days present</p>
                <span>
                  <p>
                    25 <i>days</i>
                  </p>

                  <span className="att-up">
                    <FaArrowUp />
                    <p>10%</p>
                  </span>
                </span>
              </span>

              <span className="attendace-cont">
                <p>Days present</p>
                <span>
                  <p>
                    25 <i>days</i>
                  </p>

                  <span className="att-down">
                    <FaArrowDown />
                    <p>10%</p>
                  </span>
                </span>
              </span>
              <span className="attendace-cont">
                <p>Days present</p>
                <span>
                  <p>
                    25 <i>days</i>
                  </p>

                  <span className="att-down">
                    <FaArrowDown />
                    <p>10%</p>
                  </span>
                </span>
              </span>
              <span className="attendace-cont">
                <p>Days present</p>
                <span>
                  <p>
                    25 <i>days</i>
                  </p>

                  <span className="att-up">
                    <FaArrowUp />
                    <p>10%</p>
                  </span>
                </span>
              </span>
            </div>
          </div> */}
         <div class="row">
          <div class="col">
            <Card className="client-employee-payroll-card">
          <div id="client-employee-payroll">
            <h3>View reports for Enock</h3>

            <span>
              <label>Select period for the report.</label>
              <select>
                <option value="2 week">1 month</option>
                <option value="1 month">1 month</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
              </select>
            </span>
            <div id="report-buttons">
              <button type="submit" className="report-button">View payroll</button>
              <button  type="submit" className="report-button">Disciplinary report</button>
              <button   type="submit"className="report-button">Attendance report</button>
            </div>
          </div>
          </Card>
        </div>

      
        </div>
        </div>
   
        <div id="client-employee-info">
          <div id="client-employee-cases">
            <Card className="client-employee-info-card">
            <p className="container-title">Enock's Details</p>
            <div id="client-employee-schedule">
              <Table>
              <thead>
                  <tr>
                    <th>Employee.No</th>
                    <th>Name</th>
                     <th>Gender</th>
                    <th>Total Days present</th>
                    <th>Total Days Absent</th>
                    <th>Gross Earnings</th>
                    <th>Net Earning</th>
                    <th>Leave Requests</th>
                    <tr>
         
        </tr>

                  </tr>
                </thead>
                <tbody>
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
                            <td>
                            <span className="client-home-emps-net">2</span>

                            </td>

                            
                          </tr>
                          <tr>
         
        </tr>
                </tbody>



              </Table>
              {/* <span className="client-employee-schedule-span">ssss</span>{" "}
              <span className="client-employee-schedule-span">ssss</span>{" "}
              <span className="client-employee-schedule-span">ssss</span>{" "}
              <span className="client-employee-schedule-span">ssss</span>
               */}
            </div>
            </Card>
          </div>
          
          </div>
          

          <div id="client-employee-location">
            <div className="client-employee-location-card">
              <div className="map-container">
            <p>Recent locations</p>
            <DeviceMap />
            </div>
            </div>
          </div>
         

         <div id="client-employee-attendace">
          <Card className="client-employee-attendace-card">
            <h3>March in Stats</h3>
            <div id="client-employee-attendace-cont">
              <span className="attendace-cont-present">
                <p>Days present</p>
                <span>
                  <p>
                    25 <i>days</i>
                  </p>

                  <span className="att-up">
                    <FaArrowUp />
                    <p>10%</p>
                  </span>
                </span>
              </span>
              <span className="attendace-cont-absent">
                <p>Days absent</p>
                <span>
                  <p>
                    5 <i>days</i>
                  </p>

                  <span className="att-down">
                    <FaArrowDown />
                    <p>10%</p>
                  </span>
                </span>
              </span>
             
              {/* <span className="attendace-cont">
                <p>Days present</p>
                <span>
                  <p>
                    25 <i>days</i>
                  </p>

                  <span className="att-down">
                    <FaArrowDown />
                    <p>10%</p>
                  </span>
                </span>
              </span>
              <span className="attendace-cont">
                <p>Days present</p>
                <span>
                  <p>
                    25 <i>days</i>
                  </p>

                  <span className="att-down">
                    <FaArrowDown />
                    <p>10%</p>
                  </span>
                </span>
              </span>
              <span className="attendace-cont">
                <p>Days present</p>
                <span>
                  <p>
                    25 <i>days</i>
                  </p>

                  <span className="att-up">
                    <FaArrowUp />
                    <p>10%</p>
                  </span>
                </span>
              </span> */}
            </div>
            </Card>
          </div>
         
          </div>
         
        {/* <div id="client-employee-location">
            <p>Recent locations</p>
            <DeviceMap /> */}
          {/* </div> */}
      </section>
    </section>
  );
}
