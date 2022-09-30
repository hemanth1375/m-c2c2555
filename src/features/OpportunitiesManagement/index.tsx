import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateOpportunity from "./CreateOpportunities/CreateOpportunity";

import ViewOpportunity from "./ViewOpportunities/ViewOpportunity";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewOpportunity />} />
      <Route path="/createOpportunity" element={<CreateOpportunity />} />
      <Route path="/viewOpportunity" element={<ViewOpportunity />} />
    </Routes>
  );
};

export default index;
