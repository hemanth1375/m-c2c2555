import { NavLink } from "react-router-dom";
import { FaBars, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";

import { BiSearch } from "react-icons/bi";

import { AiTwotoneFileExclamation } from "react-icons/ai";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { translate } from "languages";
import "./Sidebar.css";
const routes = [
  {
    path: "/accounts",
    name: translate("accounts"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/accounts",
        name: translate("createAccount"),
        icon: <FaUser />,
      },
      {
        path: "/accounts/viewaccount",
        name: translate("viewAccount"),
        icon: <FaLock />,
      },
      {
        path: "/accounts/importaccounts",
        name: translate("importAccount"),
        icon: <FaMoneyBill />,
      },
      {
        path: "/accounts/recentlyviewed",
        name: translate("recentlyViewed"),
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/contacts",
    name: translate("contacts"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/contacts",
        name: translate("createContact"),
        icon: <FaUser />,
      },
      {
        path: "/contacts/createcontactfromvcard",
        name: translate("createContactFromVCard"),
        icon: <FaUser />,
      },
      {
        path: "/contacts/viewcontacts",
        name: translate("viewContacts"),
        icon: <FaLock />,
      },
      {
        path: "/contacts/importcontacts",
        name: translate("importContacts"),
        icon: <FaMoneyBill />,
      },
      {
        path: "/contacts/recentlyviewed",
        name: translate("recentlyViewed"),
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    path: "/oppotunities",
    name: translate("opportunities"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/opportunities/createopportunity",
        name: translate("createOpportunity"),
        icon: <FaUser />,
      },
      {
        path: "/opportunities/viewopportunity",
        name: translate("viewOpportunity"),
        icon: <FaLock />,
      },
      {
        path: "/opportunities/importopportunity",
        name: translate("importOpportunity"),
        icon: <FaMoneyBill />,
      },
      {
        path: "/opportunities/recentlyviewed",
        name: translate("recentlyViewed"),
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/leads",
    name: translate("leads"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/leads/createlead",
        name: translate("createLead"),
        icon: <FaUser />,
      },
      {
        path: "/leads/createleadfromvcard",
        name: translate("createLeadFromVCard"),
        icon: <FaUser />,
      },
      {
        path: "/leads/viewleads",
        name: translate("viewLeads"),
        icon: <FaLock />,
      },
      {
        path: "/leads/importleads",
        name: translate("importLeads"),
        icon: <FaMoneyBill />,
      },
      {
        path: "/leads/recentlyviewed",
        name: translate("recentlyViewed"),
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/quotes",
    name: translate("quotes"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/quotes/createquote",
        name: translate("createQuotes"),
        icon: <FaUser />,
      },
      {
        path: "/quotes/viewquotes",
        name: translate("viewQuotes"),
        icon: <FaLock />,
      },
      {
        path: "/quotes/importquotes",
        name: translate("importQuotes"),
        icon: <FaMoneyBill />,
      },
      {
        path: "/quotes/importlineitems",
        name: translate("importLineItems"),
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/calender",
    name: translate("calender"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/calender/schedulemeeting",
        name: translate("scheduleMeeting"),
        icon: <FaUser />,
      },
      {
        path: "/calender/schedulecall",
        name: translate("scheduleCall"),
        icon: <FaUser />,
      },
      {
        path: "/calender/createtask",
        name: translate("createTask"),
        icon: <FaLock />,
      },
      {
        path: "/calender/today",
        name: translate("today"),
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/more",
    name: translate("more"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/more/home",
        name: translate("home"),
        icon: <FaUser />,
      },
      {
        path: "/more/opportunities",
        name: translate("opportunities"),
        icon: <FaUser />,
      },
      {
        path: "/more/documents",
        name: translate("documents"),
        icon: <FaUser />,
      },
      {
        path: "/more/email",
        name: translate("email"),
        icon: <FaUser />,
      },
      {
        path: "/more/campaigns",
        name: translate("campaigns"),
        icon: <FaUser />,
      },
      {
        path: "/more/calls",
        name: translate("calls"),
        icon: <FaUser />,
      },
      {
        path: "/more/meeting",
        name: translate("meetings"),
        icon: <FaUser />,
      },
      {
        path: "/more/task",
        name: translate("tasks"),
        icon: <FaUser />,
      },
      {
        path: "/more/notes",
        name: translate("notes"),
        icon: <FaUser />,
      },
      {
        path: "/more/invoice",
        name: translate("invoices"),
        icon: <FaUser />,
      },
      {
        path: "/more/contracts",
        name: translate("contracts"),
        icon: <FaUser />,
      },
      {
        path: "/more/cases",
        name: translate("cases"),
        icon: <FaUser />,
      },
    ],
  },
];

const SideBar = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "11%" : "3%",

          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={`sidebar`}
      >
        <div className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                M-C2C
              </motion.h1>
            )}
          </AnimatePresence>

          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="search">
          <div className="search_icon">
            <BiSearch />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                type="text"
                placeholder="Search"
              />
            )}
          </AnimatePresence>
        </div>
        <section className="routes">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SidebarMenu
                  setIsOpen={setIsOpen}
                  route={route}
                  showAnimation={showAnimation}
                  isOpen={isOpen}
                />
              );
            }

            return (
              <NavLink
                to={route.path}
                key={index}
                className="link"
                //   activeClassName="active"
              >
                <div className="icon">{route.icon}</div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>

      <motion.div
        animate={{
          width: isOpen ? "89%" : "97%",

          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className="sidebar-children"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SideBar;
