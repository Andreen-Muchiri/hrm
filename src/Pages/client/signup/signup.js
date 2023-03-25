import "./signup.css";
import ClientBar from "../navbar/sidebar";
import ClientHeader from "../home/header";
import {Card, Col, Row, Table} from 'react-bootstrap';


export default function ClientSignup() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-signup">
        <ClientHeader message="Its payday approve payments" />
        <div id="client-signup-card-container">
          <div class="row">
            <div class="col">
              <Card className="client-signup-updates-card">
        <form>
          <h3>Set up dates for payment</h3>
          <span></span>
          <button type="submit">Update</button>
        </form>
        </Card>
        <div class="row">
          <div class="col">
            <Card className="client-signup-payment-card">
        <div>
          <h3>Approve payment</h3>
          <span>
            <p>Approve payment for casual employees</p>
            <button type="approve">Approve</button>
          </span>

          <span>
            <p>Approve payment for permanent employees</p>
            <button type="approve" >Approve</button>
          </span>

          <span>
            <p>Approve payment for seasonal employees</p>
            <button type="approve">Approve</button>
          </span>

          <span>
            <p>Approve payment for casual employees</p>
            <button type="approve">Approve</button>
          </span>
         
          </div>
          </Card>
          </div>
          </div>
        
          </div>
          
        </div>
        </div>
      </section>
    </section>
  );
}
