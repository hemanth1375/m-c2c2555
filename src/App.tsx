import React from "react";
import Home from 'pages/Home';
import Accounts from 'pages/Accounts';

import Calendar from 'pages/Calendar';
import Leads from 'pages/Leads';
import Opportunities from 'pages/Opportunities';
import Quotes from 'pages/Quotes';
import Template from "layouts/Template1/Template";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Contacts from "pages/Contacts";




function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Template>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/contacts/createcontact" element={<Contacts/>} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/opportunities/create opportunity" element={<Opportunities />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </Template>
      </BrowserRouter>
    </div>
  );
};
export default App;
