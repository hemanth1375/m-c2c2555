import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateOpportunity from "./CreateOpportunities/CreateOpportunity";
import ImportOpportunity from "./ViewOpportunities/ImportOpportunity/ImportOpportunity";

import ViewOpportunity from "./ViewOpportunities/ViewOpportunity";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewOpportunity />} />
      <Route path="/createOpportunity" element={<CreateOpportunity/>} />
      <Route path="/viewOpportunity" element={<ViewOpportunity />} />
      <Route path="/importOpportunity" element={<ImportOpportunity/>}/>
    </Routes>
  );
};

export default index;
