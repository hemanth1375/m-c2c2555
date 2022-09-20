import React, { useState } from "react";
import Home from "pages/Home";
import Accounts from "pages/Accounts";
import Contacts from "pages/Contacts";
import Calendar from "pages/Calendar";
import Leads from "pages/Leads";
import Opportunities from "pages/Opportunities";
import Quotes from "pages/Quotes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IntlProvider, LOCALES } from "./languages";
import Template from "layouts/Template1/Template";
import "./App.css";

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  const changeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value);
    console.log(e.target.value);
  };

  return (
    <IntlProvider locale={locale}>
      <div className="App">
        <select value={locale} onChange={changeLocale}>
          <option value={LOCALES.ENGLISH}>English</option>
          <option value={LOCALES.FRENCH}>French</option>
          <option value={LOCALES.GERMAN}>German</option>
        </select>
        <BrowserRouter>
          <Template>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/quotes" element={<Quotes />} />
            </Routes>
          </Template>
        </BrowserRouter>
      </div>
    </IntlProvider>
  );
}
export default App;
