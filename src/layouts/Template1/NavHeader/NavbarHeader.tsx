import "./NavbarHeader.css";
import { CgProfile } from "react-icons/cg";
import Modal from "../Modal";
import { useState } from "react";
import { GrFormSearch } from 'react-icons/gr';
const Header = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const displayModal = () => {
    setIsDisplay(!isDisplay);
  };
  return (
    <div className="container-fluid nav-container">
      <div className="title-search-container">    
       <h2 className="mb-0 title">M-C2C</h2>
       <div className="search-bar">
          <input type="search" placeholder="search" className="header-search" />
          <button type="submit"  ><GrFormSearch className="search-icon"/></button>
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
