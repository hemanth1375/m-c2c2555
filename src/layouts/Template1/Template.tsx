import React from "react";
import "./Template.css";
import Header from "./NavHeader/NavbarHeader";
import SideNavigation from "./SideNavBar/SideNavigationbar";
import Footer from "./Footer/footer";

type childProps = {
  children: React.ReactNode;
};

const Template = (props: childProps) => {
  return (
    <div className="app-container">
      <Header />
      <div className="body-container">
        <SideNavigation />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Template;
