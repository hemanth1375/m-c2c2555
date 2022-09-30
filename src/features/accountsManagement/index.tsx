import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateAccount from "./CreateAccount/CreateAccount";
import ViewAccounts from "./ViewAccounts/ViewAccounts";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewAccounts />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/viewAccounts" element={<ViewAccounts />} />
    </Routes>
  );
};

export default index;
