import React from "react";
import "./Template.css";
import Header from './NavbarHeader';
import SideBar from './Sidebar';
const Template = (props:any) => {
  return (
      
      <div className='app-container'>
        <div className='header-container'>
          <Header />
        </div>
        <div className='sidebar-container'>
        <SideBar {...props} />   
        </div>
      </div>
      
    );
};

export default Template;
