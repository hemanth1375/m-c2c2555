import { NavLink,} from "react-router-dom";
import { FaBars, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";

import { BiSearch } from "react-icons/bi";

import { AiTwotoneFileExclamation } from "react-icons/ai";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './Sidebar.css'
const routes = [
	{
		path: "/accounts",
		name: "Accounts",
		icon: <AiTwotoneFileExclamation />,
		subRoutes: [
		  {
			path: "/accounts/createaccount",
			name: "Create Account ",
			icon: <FaUser />,
		  },
		  {
			path: "/accounts/viewaccount",
			name: "View Account",
			icon: <FaLock />,
		  },
		  {
			path: "/accounts/importaccounts",
			name: "Import Account",
			icon: <FaMoneyBill />,
			},
			{
				path: "/accounts/recentlyviewed",
				name: "Recently Viewed",
				icon: <FaMoneyBill />,
			  },
		],
	},
	{
		path: "/contacts",
		name: "Contacts",
		icon: <AiTwotoneFileExclamation />,
		subRoutes: [
		  {
			path: "/contacts/createcontact",
			name: "Create contact ",
			icon: <FaUser />,
			},
			{
				path: "/contacts/createcontactfromvcard",
				name: "Create Contact From vCard",
				icon: <FaUser />,
			  },
		  {
			path: "/contacts/viewcontacts",
			name: "View Contact",
			icon: <FaLock />,
		  },
		  {
			path: "/contacts/importcontacts",
			name: "Import Contacts",
			icon: <FaMoneyBill />,
			},
			{
				path: "/contacts/recentlyviewed",
				name: "Recently Viewed",
				icon: <FaMoneyBill />,
			  },
		],
	},
	
	{
		path: "/oppotunities",
		name: "Opportunities",
		icon: <AiTwotoneFileExclamation />,
		subRoutes: [
		  {
			path: "/opportunities/createopportunity",
			name: "Create Oppotunity ",
			icon: <FaUser />,
		  },
		  {
			path: "/opportunities/viewopportunity",
			name: "View Opportunity",
			icon: <FaLock />,
		  },
		  {
			path: "/opportunities/importopportunity",
			name: "Import Opportunity",
			icon: <FaMoneyBill />,
			},
			{
				path: "/opportunities/recentlyviewed",
				name: "Recently Viewed",
				icon: <FaMoneyBill />,
			  },
		],
	},
	{
		path: "/leads",
		name: "Leads",
		icon: <AiTwotoneFileExclamation />,
		subRoutes: [
		  {
			path: "/leads/create lead",
			name: "Create Lead ",
			icon: <FaUser />,
			},
			{
				path: "/leads/createleadfromvcard",
				name: "Create Lead From vCard ",
				icon: <FaUser />,
			  },
		  {
			path: "/leads/viewleads",
			name: "View Leads",
			icon: <FaLock />,
		  },
		  {
			path: "/leads/importleads",
			name: "Import Leads",
			icon: <FaMoneyBill />,
			},
			{
				path: "/leads/recentlyviewed",
				name: "Recently Viewed",
				icon: <FaMoneyBill />,
			  },
		],
	},
	{
		path: "/quotes",
		name: "Quotes",
		icon: <AiTwotoneFileExclamation />,
		subRoutes: [
		  {
			path: "/quotes/createquote",
			name: "Create Quote ",
			icon: <FaUser />,
			},
		  {
			path: "/quotes/viewquotes",
			name: "View Quotes",
			icon: <FaLock />,
		  },
		  {
			path: "/quotes/importquotes",
			name: "Import Quotes",
			icon: <FaMoneyBill />,
			},
			{
				path: "/quotes/importlineitems",
				name: "Import Line Items",
				icon: <FaMoneyBill />,
			  },
		],
	},
	{
		path: "/calender",
		name: "Calender",
		icon: <AiTwotoneFileExclamation />,
		subRoutes: [
		  {
			path: "/calender/schedulemeeting",
			name: "Schedule Meeting ",
			icon: <FaUser />,
			},
			{
				path: "/calender/schedulecall",
				name: "Schedule Call ",
				icon: <FaUser />,
			  },
		  {
			path: "/calender/createtask",
			name: "Create Task",
			icon: <FaLock />,
		  },
		  {
			path: "/calender/today",
			name: "Today",
			icon: <FaMoneyBill />,
			},
			
		],
	},
	{
		path: "/more",
		name: "More",
		icon: <AiTwotoneFileExclamation />,
		subRoutes: [
		  {
			path: "/more/home",
			name: "Home ",
			icon: <FaUser />,
			},
			{
				path: "/more/opportunities",
				name: "Opportunities ",
				icon: <FaUser />,
			},
			{
				path: "/more/documents",
				name: "documents ",
				icon: <FaUser />,
			},
			{
				path: "/more/email",
				name: "Email",
				icon: <FaUser />,
			},
			{
				path: "/more/campaigns",
				name: "Campaigns",
				icon: <FaUser />,
			},
			{
				path: "/more/calls",
				name: "Calls",
				icon: <FaUser />,
			},
			{
				path: "/more/meeting",
				name: "Meetings",
				icon: <FaUser />,
			},
			{
				path: "/more/task",
				name: "Tasks ",
				icon: <FaUser />,
			},
			{
				path: "/more/notes",
				name: "Notes ",
				icon: <FaUser />,
			},
			{
				path: "/more/invoice",
				name: "Invoices",
				icon: <FaUser />,
			},
			{
				path: "/more/contracts",
				name: "Contracts",
				icon: <FaUser />,
			},
			{
				path: "/more/cases",
				name: "Cases ",
				icon: <FaUser />,
				},
		],
	},
	
];

const SideBar = ({ children }:any) => {
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
				 
				  className='sidebar-children'>{children}</motion.div>
      </div>
  );
};

export default SideBar;