import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaCog, FaUserTie, FaColumns, FaThList } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import './sideNavigation.css';
import styled from 'styled-components';

const Menuitem = styled(MenuItem)`
  :hover {
    background-color: #ffdb58;
    padding: 5px;
    border-radius: 10px;
  }
`;

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const styles = {
    sideBarHeight: {
        height:"78%",
    },
    menuIcon: {
      float: "right",
      margin: "10px"
    }
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div onClick={onClickMenuIcon}>
          <AiOutlineMenu className="sidebar-menu-icon"/>
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
      <SubMenu title="Acconts" icon={<FaThList />}>
          <MenuItem className="menuitem">Create Account</MenuItem>
          <MenuItem className="menuitem">View Accounts</MenuItem>
          <MenuItem className="menuitem">Import Accounts</MenuItem>
          <MenuItem className="menuitem">Recently viewed</MenuItem>
        </SubMenu>
        <SubMenu title="Contacts" icon={<FaThList />}>
          <MenuItem className="menuitem">Create Contact</MenuItem>
          <MenuItem className="menuitem">Create Contact from view card</MenuItem>
          <MenuItem className="menuitem">View Contacts</MenuItem>
          <MenuItem className="menuitem">Import Contacts</MenuItem>
          <MenuItem className="menuitem">Recently viewed</MenuItem>
        </SubMenu>
        <SubMenu title="Oppotunities" icon={<FaThList />}>
          <MenuItem className="menuitem">Create Opportunity</MenuItem>
          <MenuItem className="menuitem">View Opportunities</MenuItem>
          <MenuItem className="menuitem">Import Oppotunities</MenuItem>
          <MenuItem className="menuitem">Recently viewed</MenuItem>
        </SubMenu>
        <SubMenu title="Leads" icon={<FaThList />}>
          <MenuItem className="menuitem">Create Lead</MenuItem>
          <MenuItem className="menuitem">Create Lead From vCard</MenuItem>
          <MenuItem className="menuitem">View Leads</MenuItem>
          <MenuItem className="menuitem">Import Leads</MenuItem>
          <MenuItem className="menuitem">Recently viewed</MenuItem>
        </SubMenu>
        <SubMenu title="Quotes" icon={<FaThList />}>
          <MenuItem className="menuitem">Create Quote</MenuItem>
          <MenuItem className="menuitem">View Quotes</MenuItem>
          <MenuItem className="menuitem">Import</MenuItem>
          <MenuItem className="menuitem">Import Line Items</MenuItem>
        </SubMenu>
        <SubMenu title="Calender" icon={<FaThList />}>
          <MenuItem className="menuitem">Schedule Meeting</MenuItem>
          <MenuItem className="menuitem">Schedule Task</MenuItem>
          <MenuItem className="menuitem">Create Task</MenuItem>
          <MenuItem className="menuitem">Today</MenuItem>
        </SubMenu>
        <SubMenu title="More" icon={<FaThList />}>
          <MenuItem className="menuitem">Home</MenuItem>
          <MenuItem className="menuitem">Opportunities</MenuItem>
          <MenuItem className="menuitem">Documents</MenuItem>
          <MenuItem className="menuitem">Details</MenuItem>
          <MenuItem className="menuitem">Campaigns</MenuItem>
          <MenuItem className="menuitem">Calls</MenuItem>
          <MenuItem className="menuitem">Meetings</MenuItem>
          <MenuItem className="menuitem">Tasks</MenuItem>
          <MenuItem className="menuitem">Notes</MenuItem>
        </SubMenu>
        
      </Menu>
    </ProSidebar>
  );
};
export default SideNavigation;
