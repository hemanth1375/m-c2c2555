import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateContactFromVcard from "./CreateContactFromVcard/CreateContactFromVcard";
import CreateContact from "./CreateContacts/CreateContact";
import ViewContacts from "./ViewContacts/ViewContacts";

const index = () => {
  return (
    <Routes>
      <Route path="/createContacts" element={<CreateContact />} />
      <Route path="/" element={<ViewContacts />} />
      <Route path="/createContactFromVCard" element={<CreateContactFromVcard />} />
    </Routes>
  );
};

export default index;
