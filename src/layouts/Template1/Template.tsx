import React from 'react';
import "./Template.css";
import Header from './NavbarHeader';
import SideNavigation from './SideNavigationbar';
import Footer from './footer';
import Contacts from 'Pages/Contacts';
import SideBar from './Sidebar';
const Template = () => {
    return (
        <div className="app-container">
          <Header />
          <SideBar />   
          <Footer />
        </div>
    );
};

export default Template;