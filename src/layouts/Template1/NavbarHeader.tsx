import "./NavbarHeader.css";
import { CgProfile } from "react-icons/cg";
import Nav from "react-bootstrap/Nav";
import Modal from "./Modal";
import { useState, useContext } from "react";
import { localeContextObj } from "context/context";
import { LOCALES } from "languages";
import Select from "react-select/";
import Flags, { US } from "country-flag-icons/react/3x2";

const Header = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const displayModal = () => {
    setIsDisplay(!isDisplay);
  };

  const { locale, setLocale } = useContext(localeContextObj);
  const changeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value);
  };

  // const Flag = (countryCode: Flags.FlagComponent) => {
  //   return Flags.countryCode;
  // };

  // const Flag1 = Flags["US"];
  // const Flag2 = Flags["DE"];
  // const Flag3 = Flags["FR"];

  const languageOptions = [
    { value: LOCALES.ENGLISH, label: "EN", icon: <US /> },
    { value: LOCALES.GERMAN, label: "DE", icon: <US /> },
    { value: LOCALES.FRENCH, label: "FR", icon: <US /> },
  ];

  return (
    <Nav className="nav-container1">
      <span className="navbar-brand mb-0 h1">M-C2C</span>
      <div className="navbar-header-select">
        <select
          value={locale}
          className="select-button"
          onChange={changeLocale}
          placeholder="language"
        >
          <option value={LOCALES.ENGLISH}>
            <span>{<US />}</span>
          </option>
          <option value={LOCALES.GERMAN}>DE</option>
          <option value={LOCALES.FRENCH}>FR</option>
        </select>
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
