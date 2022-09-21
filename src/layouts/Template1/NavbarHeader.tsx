import './NavbarHeader.css'
import { CgProfile } from "react-icons/cg";
import Nav from 'react-bootstrap/Nav';
import Modal from './Modal';
import { useState } from 'react';
const Header = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const displayModal=() => {
   setIsDisplay(!isDisplay)
 }
    return (
        

    <Nav className="nav-container1">
            
       <span className="navbar-brand mb-0 title">M-C2C</span>
            
            
        <div className="navbar-header-select">
          <select className="select-button">
            <option value="English">English</option>
            <option value="German">German</option>
            <option value="French">French</option>

          </select>
        <button className="navbar-profile-container"onClick={displayModal}>
          <CgProfile className="button-profile-icon"/>
          <p>Will Westin</p>
          </button>
          </div>
        {isDisplay && <Modal/>}
         </Nav>
        
    
    )
}
export default Header;