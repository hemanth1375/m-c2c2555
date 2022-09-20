import React from 'react';
import "./Template.css";
import Header from './NavbarHeader';
import SideNavigation from './SideNavigationbar';
import Footer from './footer';

import SideBar from './Sidebar';
const Template = (props: any) => {
    return (
        <div className="app-container">
          <Header />
          <SideBar {...props}/>   
          <Footer />
        </div>
    );
};

export default Template;