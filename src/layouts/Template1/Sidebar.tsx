import { FaBars, FaEye, FaFileContract, FaFileInvoice, FaPeopleArrows, FaUser } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { translate } from "languages";
import { TiContacts } from 'react-icons/ti';
import { MdAddCall, MdGroups, MdOutlineCampaign, MdOutlineContactPhone, MdOutlineLeaderboard, MdOutlineMail, MdOutlineTask, MdSwitchAccount } from 'react-icons/md';
import "./Sidebar.css";
import { BsChatLeftQuote, BsClockHistory } from "react-icons/bs";
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { CgFileDocument, CgMoreVerticalR, CgNotes } from "react-icons/cg";
import { TbBriefcase, TbFileImport } from 'react-icons/tb';
import { AiOutlineHome, AiOutlineSchedule } from 'react-icons/ai';

import "./Sidebar.css";
import Footer from "./Footer/Footer";

const routes = [
  {
    path: "/accounts/",
    name: translate("accounts"),
    icon: <TiContacts />,
    subRoutes: [
      {
        path: "/accounts/createAccount",
        name: translate("createAccount"),
        icon: <FaUser />,
      },
      {
        path: "/accounts/viewAccounts",
        name: translate("viewAccount"),
        icon: <FaEye />,
      },
      {
        path: "/accounts/importAccounts",
        name: translate("importAccount"),
        icon: <TbFileImport />,
      },
      {
        path: "/accounts/recentlyviewed",
        name: translate("recentlyViewed"),
        icon: <BsClockHistory />,
      },
    ],
  },
  {
    path: "/contacts",
    name: translate("contacts"),
    icon: <MdSwitchAccount />,
    subRoutes: [
      {
        path: "/contacts/createContacts",
        name: translate("createContact"),
        icon: <FaUser />,
      },
      {
        path: "/contacts/createContactFromVCard",
        name: translate("createContactFromVCard"),
        icon: <MdOutlineContactPhone />,
      },
      {
        path: "/contacts/",
        name: translate("viewContacts"),
        icon: <FaEye />,
      },
      {
        path: "/contacts/importcontacts",
        name: translate("importContacts"),
        icon: <TbFileImport />,
      },
      {
        path: "/contacts/recentlyviewed",
        name: translate("recentlyViewed"),
        icon: <BsClockHistory />,
      },
    ],
  },

  {
    path: "/oppotunities",
    name: translate("opportunities"),
    icon: <FaPeopleArrows />,
    subRoutes: [
      {
        path: "/opportunities/createOpportunity",
        name: translate("createOpportunity"),
        icon: <FaUser />,
      },
      {
        path: "/opportunities/viewOpportunity",
        name: translate("viewOpportunity"),
        icon: <FaEye />,
      },
      {
        path: "/opportunities/importOpportunity",
        name: translate("importOpportunity"),
        icon: <TbFileImport />,
      },
      {
        path: "/opportunities/recentlyViewed",
        name: translate("recentlyViewed"),
        icon: <BsClockHistory />,
      },
    ],
  },
  {
    path: "/leads",
    name: translate("leads"),
    icon: <MdOutlineLeaderboard />,
    subRoutes: [
      {
        path: "/leads/createlead",
        name: translate("createLead"),
        icon: <FaUser />,
      },
      {
        path: "/leads/createleadfromvcard",
        name: translate("createLeadFromVCard"),
        icon: <MdOutlineContactPhone />,
      },
      {
        path: "/leads/viewleads",
        name: translate("viewLeads"),
        icon: <FaEye />,
      },
      {
        path: "/leads/importleads",
        name: translate("importLeads"),
        icon: <TbFileImport />,
      },
      {
        path: "/leads/recentlyviewed",
        name: translate("recentlyViewed"),
        icon: <BsClockHistory />,
      },
    ],
  },
  {
    path: "/quotes",
    name: translate("quotes"),
    icon: <BsChatLeftQuote />,
    subRoutes: [
      {
        path: "/quotes/createquote",
        name: translate("createQuotes"),
        icon: <FaUser />,
      },
      {
        path: "/quotes/viewquotes",
        name: translate("viewQuotes"),
        icon: <FaEye />,
      },
      {
        path: "/quotes/importquotes",
        name: translate("importQuotes"),
        icon: <TbFileImport />,
      },
      {
        path: "/quotes/importlineitems",
        name: translate("importLineItems"),
        icon: <TbFileImport />,
      },
    ],
  },
  {
    path: "/calender",
    name: translate("calendar"),
    icon: <IoCalendarNumberOutline />,
    subRoutes: [
      {
        path: "/calender/schedulemeeting",
        name: translate("scheduleMeeting"),
        icon: <AiOutlineSchedule />,
      },
      {
        path: "/calender/schedulecall",
        name: translate("scheduleCall"),
        icon: <MdAddCall />,
      },
      {
        path: "/calender/createtask",
        name: translate("createTask"),
        icon: <FaEye />,
      },
      {
        path: "/calender/today",
        name: translate("today"),
        icon: <BsClockHistory />,
      },
    ],
  },
  {
    path: "/more",
    name: translate("more"),
    icon: <CgMoreVerticalR />,
    subRoutes: [
      {
        path: "/more/home",
        name: translate("home"),
        icon: <AiOutlineHome />,
      },
      {
        path: "/more/opportunities",
        name: translate("opportunities"),
        icon: <FaPeopleArrows />,
      },
      {
        path: "/more/documents",
        name: translate("documents"),
        icon: <CgFileDocument />,
      },
      {
        path: "/more/email",
        name: translate("email"),
        icon: <MdOutlineMail />,
      },
      {
        path: "/more/campaigns",
        name: translate("campaigns"),
        icon: <MdOutlineCampaign />,
      },
      {
        path: "/more/calls",
        name: translate("calls"),
        icon: <MdAddCall />,
      },
      {
        path: "/more/meeting",
        name: translate("meetings"),
        icon: <MdGroups />,
      },
      {
        path: "/more/task",
        name: translate("tasks"),
        icon: <MdOutlineTask />,
      },
      {
        path: "/more/notes",
        name: translate("notes"),
        icon: <CgNotes />,
      },
      {
        path: "/more/invoice",
        name: translate("invoices"),
        icon: <FaFileInvoice />,
      },
      {
        path: "/more/contracts",
        name: translate("contracts"),
        icon: <FaFileContract />,
      },
      {
        path: "/more/cases",
        name: translate("cases"),
        icon: <TbBriefcase />,
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
      width: "8.75rem",
      padding: "0.313rem 0.938rem",
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
          minWidth: isOpen ? "12%" : "3%",
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
        <section className="routes">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SidebarMenu
                  setIsOpen={setIsOpen}
                  route={route}
                  showAnimation={showAnimation}
                  isOpen={isOpen}
                  key={index}
                />
              );
            }

            return (
              <SidebarMenu
                setIsOpen={setIsOpen}
                route={route}
                showAnimation={showAnimation}
                isOpen={isOpen}
                key={index}
              />
            );
          })}
        </section>
      </motion.div>

      <motion.div
        animate={{
          width: isOpen ? "88%" : "97%",
          // backgroundColor: "#cccccc",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className="sidebar-children"
      >
        <div className="sidebar-children-container">{children}</div>
        <div>
          <Footer />
        </div>
      </motion.div>
    </div>
  );
};

export default SideBar;
