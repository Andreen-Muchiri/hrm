import React from "react";
import ClientHeader from "../home/header";
import ClientBar from "../navbar/sidebar";
import "./apps.css";
import {Card, Col, Row, Table} from 'react-bootstrap';


export default function ClientApps(){
    return(
        
        <section id="client-cont">
        <ClientBar />
        <section id="client-dashboard">
        <ClientHeader message="Welcome to Enock's profile." />

        <div id="client-apps-container">
            <div class="row">
                <div  class="col">
                    <Card className="client-dashboard-card">
                       <Card.Title>
                        Home
                       </Card.Title>
                       <Card.Body>
                        <Card.Text>
                            HOME
                            </Card.Text>
                       </Card.Body>
                    </Card>
                </div>

            </div>

            <div class="row">
                <div  class="col">
                    <Card className="client-dashboard-card">
                       <Card.Title>
                        Home
                       </Card.Title>
                       <Card.Body>
                        <Card.Text>
                            HOME
                            </Card.Text>
                       </Card.Body>
                    </Card>
                </div>

            </div>
            <div class="row">
                <div  class="col">
                    <Card className="client-dashboard-card">
                       <Card.Title>
                        Home
                       </Card.Title>
                       <Card.Body>
                        <Card.Text>
                            HOME
                            </Card.Text>
                       </Card.Body>
                    </Card>
                </div>

            </div>
            </div>

            <div id="client-apps-container-2">
            <div class="row">
                <div  class="col">
                    <Card className="client-dashboard-card">
                       <Card.Title>
                        Home
                       </Card.Title>
                       <Card.Body>
                        <Card.Text>
                            HOME
                            </Card.Text>
                       </Card.Body>
                    </Card>
                </div>

            </div>
          

            <div class="row">
                <div  class="col">
                    <Card className="client-dashboard-card">
                       <Card.Title>
                        Home
                       </Card.Title>
                       <Card.Body>
                        <Card.Text>
                            HOME
                            </Card.Text>
                       </Card.Body>
                    </Card>
                </div>

            </div>
            <div class="row">
                <div  class="col">
                    <Card className="client-dashboard-card">
                       <Card.Title>
                        Home
                       </Card.Title>
                       <Card.Body>
                        <Card.Text>
                            HOME
                            </Card.Text>
                       </Card.Body>
                    </Card>
                </div>

            </div>
</div>
       
        </section>
  </section>
 
    )
}