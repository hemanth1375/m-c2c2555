import React from "react";
import Home from 'Pages/Home';
import Accounts from 'Pages/Accounts';
import Contacts from 'Pages/Contacts';
import Calendar from 'Pages/Calendar';
import Leads from 'Pages/Leads';
import Opportunities from 'Pages/Opportunities';
import Quotes from 'Pages/Quotes';
import Template from "layouts/Template1/Template";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "layouts/Template1/footer";
import './App.css';




function App() {

  return (
    // <div className="App">
      <BrowserRouter>
        <Template>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/contacts/createcontact" element={<Contacts />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/opportunities/createopportunity" element={<Opportunities />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </Template>
        
      </BrowserRouter>
    
  );
};
export default App;
