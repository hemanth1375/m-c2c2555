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
import './Sidebar.css'
const routes = [
	{
		path: "/accounts",
		name: "Accounts",
		icon: <AiTwotoneFileExclamation />,
		subRoutes: [
		  {
			path: "/accounts/create account",
			name: "Create Account ",
			icon: <FaUser />,
		  },
		  {
			path: "/accounts/view account",
			name: "View Account",
			icon: <FaLock />,
		  },
		  {
			path: "/accounts/import accounts",
			name: "Import Account",
			icon: <FaMoneyBill />,
			},
			{
				path: "/accounts/recently viewed",
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
			path: "/contacts/create contact",
			name: "Create contact ",
			icon: <FaUser />,
			},
			{
				path: "/contacts/create contact from vcard",
				name: "Create Contact From vCard",
				icon: <FaUser />,
			  },
		  {
			path: "/contacts/view contacts",
			name: "View Contact",
			icon: <FaLock />,
		  },
		  {
			path: "/contacts/import contacts",
			name: "Import Contacts",
			icon: <FaMoneyBill />,
			},
			{
				path: "/contacts/recently viewed",
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
			path: "/opportunities/create opportunity",
			name: "Create Oppotunity ",
			icon: <FaUser />,
		  },
		  {
			path: "/opportunities/view opportunity",
			name: "View Opportunity",
			icon: <FaLock />,
		  },
		  {
			path: "/opportunities/import opportunity",
			name: "Import Opportunity",
			icon: <FaMoneyBill />,
			},
			{
				path: "/opportunities/recently viewed",
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
				path: "/leads/create lead from vcard",
				name: "Create Lead From vCard ",
				icon: <FaUser />,
			  },
		  {
			path: "/leads/view leads",
			name: "View Leads",
			icon: <FaLock />,
		  },
		  {
			path: "/leads/import leads",
			name: "Import Leads",
			icon: <FaMoneyBill />,
			},
			{
				path: "/leads/recently viewed",
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
			path: "/quotes/create quote",
			name: "Create Quote ",
			icon: <FaUser />,
			},
		  {
			path: "/quotes/view quotes",
			name: "View Quotes",
			icon: <FaLock />,
		  },
		  {
			path: "/quotes/import quotes",
			name: "Import Quotes",
			icon: <FaMoneyBill />,
			},
			{
				path: "/quotes/import line items",
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
			path: "/calender/schedule meeting",
			name: "Schedule Meeting ",
			icon: <FaUser />,
			},
			{
				path: "/calender/schedule call",
				name: "Schedule Call ",
				icon: <FaUser />,
			  },
		  {
			path: "/calender/create task",
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

			  <main style={{ width: "100%",height:"auto"}}>{children}</main>
      </div>
    </>
  );
};

export default SideBar;