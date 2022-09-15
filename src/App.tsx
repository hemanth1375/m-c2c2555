import Home from 'Pages/Home';
import Accounts from 'Pages/Accounts';
import Contacts from 'Pages/Contacts';
import Calendar from 'Pages/Calendar';
import Leads from 'Pages/Leads';
import Opportunities from 'Pages/Opportunities';
import Quotes from 'Pages/Quotes';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
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
}

export default App;
