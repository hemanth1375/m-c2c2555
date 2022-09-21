import React, { useState, useContext } from "react";
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
import { localeContextObj } from "context/context";
import "./App.css";

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  console.log(locale);

  return (
    <localeContextObj.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale}>
        <div className="App">
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
    </localeContextObj.Provider>
  );
}
export default App;
