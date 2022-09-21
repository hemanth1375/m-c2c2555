import { NavLink, Route } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { translate } from "languages";
import "./Sidebar.css";
const routes = [
  {
    path: "/accounts",
    name: translate("ACCOUNTS"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/accounts",
        name: translate("Create Account"),
        icon: <FaUser />,
      },
      {
        path: "/accounts/viewaccount",
        name: translate("View Account"),
        icon: <FaLock />,
      },
      {
        path: "/accounts/importaccounts",
        name: translate("Import Account"),
        icon: <FaMoneyBill />,
      },
      {
        path: "/accounts/recentlyviewed",
        name: translate("Recently Viewed"),
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/contacts",
    name: translate("Contacts"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/contacts",
        name: translate("Create contact"),
        icon: <FaUser />,
      },
      {
        path: "/contacts/createcontactfromvcard",
        name: translate("Create Contact From vCard"),
        icon: <FaUser />,
      },
      {
        path: "/contacts/viewcontacts",
        name: translate("View Contact"),
        icon: <FaLock />,
      },
      {
        path: "/contacts/importcontacts",
        name: translate("Import Contacts"),
        icon: <FaMoneyBill />,
      },
      {
        path: "/contacts/recentlyviewed",
        name: translate("Recently Viewed"),
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    path: "/oppotunities",
    name: translate("Opportunities"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/opportunities/createopportunity",
        name: translate("Create Oppotunity"),
        icon: <FaUser />,
      },
      {
        path: "/opportunities/viewopportunity",
        name: translate("View Opportunity"),
        icon: <FaLock />,
      },
      {
        path: "/opportunities/importopportunity",
        name: translate("Import Opportunity"),
        icon: <FaMoneyBill />,
      },
      {
        path: "/opportunities/recentlyviewed",
        name: translate("Recently Viewed"),
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/leads",
    name: translate("Leads"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/leads/createlead",
        name: translate("Create Lead"),
        icon: <FaUser />,
      },
      {
        path: "/leads/createleadfromvcard",
        name: translate("Create Lead From vCard"),
        icon: <FaUser />,
      },
      {
        path: "/leads/viewleads",
        name: translate("View Leads"),
        icon: <FaLock />,
      },
      {
        path: "/leads/importleads",
        name: translate("Import Leads"),
        icon: <FaMoneyBill />,
      },
      {
        path: "/leads/recentlyviewed",
        name: translate("Recently Viewed"),
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/quotes",
    name: translate("Quotes"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/quotes/createquote",
        name: translate("Create Quote"),
        icon: <FaUser />,
      },
      {
        path: "/quotes/viewquotes",
        name: translate("View Quotes"),
        icon: <FaLock />,
      },
      {
        path: "/quotes/importquotes",
        name: translate("Import Quotes"),
        icon: <FaMoneyBill />,
      },
      {
        path: "/quotes/importlineitems",
        name: translate("Import Line Items"),
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/calender",
    name: translate("Calender"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/calender/schedulemeeting",
        name: translate("Schedule Meeting"),
        icon: <FaUser />,
      },
      {
        path: "/calender/schedulecall",
        name: translate("Schedule Call"),
        icon: <FaUser />,
      },
      {
        path: "/calender/createtask",
        name: translate("Create Task"),
        icon: <FaLock />,
      },
      {
        path: "/calender/today",
        name: translate("Today"),
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/more",
    name: translate("More"),
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/more/home",
        name: translate("Home"),
        icon: <FaUser />,
      },
      {
        path: "/more/opportunities",
        name: translate("Opportunities"),
        icon: <FaUser />,
      },
      {
        path: "/more/documents",
        name: translate("documents"),
        icon: <FaUser />,
      },
      {
        path: "/more/email",
        name: translate("Email"),
        icon: <FaUser />,
      },
      {
        path: "/more/campaigns",
        name: translate("Campaigns"),
        icon: <FaUser />,
      },
      {
        path: "/more/calls",
        name: translate("Calls"),
        icon: <FaUser />,
      },
      {
        path: "/more/meeting",
        name: translate("Meetings"),
        icon: <FaUser />,
      },
      {
        path: "/more/task",
        name: translate("Tasks"),
        icon: <FaUser />,
      },
      {
        path: "/more/notes",
        name: translate("Notes"),
        icon: <FaUser />,
      },
      {
        path: "/more/invoice",
        name: translate("Invoices"),
        icon: <FaUser />,
      },
      {
        path: "/more/contracts",
        name: translate("Contracts"),
        icon: <FaUser />,
      },
      {
        path: "/more/cases",
        name: translate("Cases"),
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
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "180px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
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

        <main style={{ width: "100%", height: "auto" }}>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
