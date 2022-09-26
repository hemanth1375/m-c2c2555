import "./NavbarHeader.css";
import { CgProfile } from "react-icons/cg";
import Nav from "react-bootstrap/Nav";
import Modal from "../Modal";
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

  //storing countries in array with flag code and locales language code
  const [countries] = useState([
    { code: "de", title: "German", localeCode: LOCALES.GERMAN },
    { code: "fr", title: "French", localeCode: LOCALES.FRENCH },
    { code: "us", title: "English", localeCode: LOCALES.ENGLISH },
  ]);

  // initial toggle content as english
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
    <Nav className="nav-container1">
      <span className="navbar-brand mb-0 h1">M-C2C</span>
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
        <button className="navbar-profile-container" onClick={displayModal}>
          <CgProfile className="button-profile-icon" />
          <p>Will Westin</p>
        </button>
      </div>
      {isDisplay && <Modal />}
    </Nav>
  );
};
export default Header;
