import "./NavbarHeader.css";
import { CgProfile } from "react-icons/cg";
import Modal from "../Modal";
import { GrFormSearch } from "react-icons/gr";
import { useState, useContext } from "react";
import { localeContextObj } from "context/context";
import { LOCALES } from "languages";
import Dropdown from "react-bootstrap/Dropdown";
import FlagIcon from "../FlagIcon";

const Header = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const displayModal = () => {
    setIsDisplay(!isDisplay);
  };

  const { setLocale } = useContext(localeContextObj);

  const [countries] = useState([
    { code: "de", title: "German", localeCode: LOCALES.GERMAN },
    { code: "fr", title: "French", localeCode: LOCALES.FRENCH },
    { code: "us", title: "English", localeCode: LOCALES.ENGLISH },
  ]);

  const initialToggleContent = (
    <>
      <FlagIcon code={countries[2].code} /> {countries[2].title}
    </>
  );
  const [toggleContents, setToggleContents] =
    useState<any>(initialToggleContent);

  const changeLanguageHandler = (eventKey: any) => {
    const { code, title, localeCode }: any = countries.find(
      ({ code }) => eventKey === code
    );
    setLocale(localeCode);
    setToggleContents(
      <>
        <FlagIcon code={code} /> {title}
      </>
    );
  };

  return (
    <nav className="container-fluid nav-container">
      <div className="title-search-container">
        <h2 className="mb-0 title">M-C2C</h2>
        <div className="search-bar">
          <input type="search" placeholder="search" className="header-search" />
          <button type="submit">
            <GrFormSearch className="search-icon" />
          </button>
        </div>
      </div>
      <div className="navbar-header-select">
        <Dropdown onSelect={changeLanguageHandler}>
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-flags"
            className="language-dropdown text-left"
            style={{ width: 300 }}
          >
            {toggleContents}
          </Dropdown.Toggle>

          <Dropdown.Menu className="language-dropdown-content-box">
            {countries.map(({ code, title }) => (
              <Dropdown.Item
                className="language-dropdown-eact-item"
                key={code}
                eventKey={code}
              >
                <FlagIcon code={code} /> {title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <button className="navbar-profile-button" onClick={displayModal}>
          <CgProfile className="button-profile-icon" />
          Will Westin
        </button>
      </div>
      {isDisplay && <Modal />}
    </nav>
  );
};
export default Header;
