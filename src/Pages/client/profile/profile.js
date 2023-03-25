import ClientBar from "../navbar/sidebar";
import "./profile.css";
import ClientHeader from "../home/header";
import {Card, Col, Row, Table} from 'react-bootstrap';

export default function ClientProfile() {
  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-profile">
        <ClientHeader message="Update your organisations details." />

        <section id="client-profile-1">
          <div id="client-profile-card-container">
            <div class='row'>
              <div class='col'>
                <Card className="client-profile-general-details-card">
          <form>
            <h3 className="client-profile-general-details-title">Update general details</h3>
            <span>
              <input type="text" placeholder="Organisations name" />
              <input type="text" placeholder="Organisations number" />
              <input
                type="text"
                placeholder="Organisations incoporation date"
              />
              <input
                type="text"
                placeholder="Organisations brief description"
              />
            </span>

            <span>
              <label for="org-type">Select organization type:</label>
              <select id="org-type" name="org-type">
                <option value="sole-proprietorship">Sole Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="corporation">Corporation</option>
                <option value="limited-liability-company">
                  Limited Liability Company (LLC)
                </option>
                <option value="nonprofit-organization">
                  Nonprofit Organization
                </option>
                <option value="cooperative">Cooperative</option>
                <option value="franchise">Franchise</option>
                <option value="joint-venture">Joint Venture</option>
                <option value="government-agency">Government Agency</option>
                <option value="international-organization">
                  International Organization
                </option>
              </select>
            </span>
            <button type="submit">Update</button>
          </form>
          </Card>
          </div>
          </div>
          
          <div class='row 2'>
            <div class='col 2'>
              <Card className="client-profile-financial-details-card">
          <form>
            <h3 className="client-profile-general-details-title">Financial details</h3>
            <span>
              <input type="text" placeholder="KRA pin" />
              <input type="text" placeholder="NSSF number" />
              <input type="text" placeholder="NHIF number" />
              <input type="text" placeholder="Bank name" />
              <input type="text" placeholder="Bank branch" />
              <input type="text" placeholder="Bank account number" />
            </span>
            <button type="submit">Update details</button>
          </form>
          </Card>
          </div>
          </div>

     <div class='row 3'>
      <div class='col 3'>
        <Card className="client-profile-payment-details-card">
          <form>
            <h3 className="client-profile-payment-details-title">Payment details</h3>
            <span>
              <label>Set payment range for permanent employees.</label>
              <select id="org-type">
                <option value="one-week">One week</option>
                <option value="two-week">Two weeks</option>
                <option value="one-month">One month</option>
              </select>
            </span>
            <button type="submit">Update details</button>
          </form> 
          </Card>
          </div>
          </div>
         
          </div>
        </section>
      </section>
    </section>
  );
}
