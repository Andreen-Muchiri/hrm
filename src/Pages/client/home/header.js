import "./home.css";
import { FaBell } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function ClientHeader(props) {
  return (
    <Navbar className="navbar-custom" expand="lg">
    <Navbar.Brand href="#home">       <span id="client-bar-head">
      <h1></h1></span>

</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav style={{ marginLeft: 'auto',marginTop: "25px" }}className="navbar-mr-auto">
      <span>
        <form id="header-search">
          <FaSearch id="search-icon" />
           <input type="text" placeholder="Search" />
       </form>
       </span>
       <Link to="/client/notifications" className="notifications">
         <FaBell />
         </Link>
         <Link to="/client/messages" className="notifications">
         <FaComment />
       </Link>
       
       
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  // <div>
  // <h3>Good morning, Enock</h3>
  //  <p>{props.message}</p>
  // </div>
    // <header id="client-home-header">
    //   <div>
    //     <h3>Good morning, Enock</h3>
    //     <p>{props.message}</p>
    //   </div>

    //   <span>
    //     <form id="header-search">
    //       <FaSearch id="search-icon" />
    //       <input type="text" placeholder="Search" />
    //     </form>

    //     <Link to="/client/notifications" className="notifications">
    //       <FaBell />
    //     </Link>

    //     <Link to="/client/messages" className="notifications">
    //       <FaComment />
    //     </Link>
    //   </span>
    // </header>
  );
}
