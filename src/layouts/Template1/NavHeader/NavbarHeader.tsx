import "./NavbarHeader.css";
import { CgProfile } from "react-icons/cg";
import Modal from "../Modal";
import { useState } from "react";
const Header = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const displayModal = () => {
    setIsDisplay(!isDisplay);
  };
  return (
    <div className="container-fluid nav-container">
      <div className="title-search-container">    
       <h2 className="mb-0 title">M-C2C</h2>
       <div>
          <input type="search" placeholder="search" className="header-search"/>
        </div>
        </div>
      <div className="navbar-header-select">
        
        <div>
        <select className="select-button">
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="French">French</option>
          </select>
          </div>
        <button className="navbar-profile-button" onClick={displayModal}>
          <CgProfile className="button-profile-icon" />
          Will Westin
          </button>
          </div>
          {isDisplay && <Modal />}
          
         </div>
    
    )
}
export default Header;
