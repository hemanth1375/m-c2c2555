import React from "react";
import Home from 'pages/Home';
import Accounts from 'pages/Accounts';
import Contacts from 'pages/Contacts';
import Calendar from 'pages/Calendar';
import Leads from 'pages/Leads';
import Opportunities from 'pages/Opportunities';
import Quotes from 'pages/Quotes';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/quotes" element={<Quotes />} />
      </Routes>
      </BrowserRouter>
    </div>
 );
};
export default App;
