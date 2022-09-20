import './NavbarHeader.css'
import { CgProfile } from "react-icons/cg";
import Nav from 'react-bootstrap/Nav';
import Modal from './Modal';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillBellFill } from 'react-icons/bs';
import { useState } from 'react';
const Header = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const displayModal=() => {
   setIsDisplay(!isDisplay)
 }
    return (
        

    <Nav className="nav-container navbar-fixed-top">
            
       <span className="navbar-brand mb-0 h1">M-C2C</span>
            
            {/* <Nav classNameName="navbar-profile-section">
                <Navbar.Brand href="#home"><CgProfile/> Will Westin</Navbar.Brand>
            
           </Nav> */}
            {/* <Nav>
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
                </Nav> */}
        
        <button className="navbar-profile-container"onClick={displayModal}>
          <CgProfile className="button-profile-icon"/>
          <p>Will Westin</p>
          </button>
          
        {isDisplay && <Modal />}
         </Nav>
        
    
    )
}
export default Header;