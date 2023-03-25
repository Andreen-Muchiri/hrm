import ClientHeader from "../home/header";
import ClientBar from "../navbar/sidebar";
import "./money.css";
import {Card, Col, Row, Table} from 'react-bootstrap';


export default function ClientMoney() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-money">
        <ClientHeader message="Add new employees to your organisation" />
        <div id ="client-money-card-container">

        <div class="row">
          <div class="col">
          <Card className="client-money-new-employee-card">
          <h2>Add new employee to your organisation</h2>
          <button type="download">Download excel sheet</button>
          </Card>
          </div>
        </div>


          <div class="row">
            <div class="col"> 
            <Card className="client-money-mass-employee-card">
        <form className="client-money-mass-employee-form">
          <h4 className="client-money-mass-employee-title">Mass add employees for your organisation.</h4>
          <p>
            Download the excel sheet, fill out your employees details then
            upload it.
          </p>
          <input type="file" />
          <button type="submit">Add employees</button>
        </form>
        </Card>
        </div>
        </div>

        <div class="row">
          <div class="col">
            <Card className="client-money-single-employee-card">
        <form>
          <h4>Add a single employee</h4>
          <div>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Second name" />
            <input type="text" placeholder="Third name" />
            <input type="number" placeholder="Id number" />
          </div>
          <button type="submit">Register employee</button>
        </form>
        </Card>
        </div>
        </div>

        </div>
      </section>
    </section>
  );
}
