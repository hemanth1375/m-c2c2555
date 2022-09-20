import './NavbarHeader.css'
import { CgProfile } from "react-icons/cg";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
const Header=()=>{
    return (
        <Nav className="nav-container">
            
            <span className="navbar-brand mb-0 h1">M-C2C</span>
            
            {/* <Nav className="navbar-profile-section">
                <Navbar.Brand href="#home"><CgProfile/> Will Westin</Navbar.Brand>
            
           </Nav> */}
            <Nav>
            <CgProfile className="navbar-header-profile-icon"/>   
            <NavDropdown title="Will Westin" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#" id="drop">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Employees
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Support Form</NavDropdown.Item>
              <NavDropdown.Item href="#">About</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Logout
              </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            
        </Nav>
    )
}
export default Header;