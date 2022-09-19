import Home from 'Pages/Home';
import Accounts from 'Pages/Accounts';
import Contacts from 'Pages/Contacts';
import Calendar from 'Pages/Calendar';
import Leads from 'Pages/Leads';
import Opportunities from 'Pages/Opportunities';
import Quotes from 'Pages/Quotes';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Sidebar from './layouts/Template1/Sidebar';
import './App.css';
import NavbarHeader from 'layouts/Template1/NavbarHeader';
import Footer from 'layouts/Template1/footer';
const App = () => {
// function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarHeader/>
        <Sidebar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/contacts/create contact" element={<Contacts />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/opportunities/create opportunity" element={<Opportunities />} />
      <Route path="/quotes" element={<Quotes />} />
        </Routes>
        </Sidebar>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};
export default App;
