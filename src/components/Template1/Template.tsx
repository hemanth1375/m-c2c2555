import React from 'react';
import "./Template.css";
import Header from './NavbarHeader';
import SideNavigation from './SideNavigationbar';
import Footer from './footer';

const Template = () => {
    return (
        <div className="app-container">
      <Header />
      <SideNavigation />
      <Footer />
    </div>
    );
};

export default Template;