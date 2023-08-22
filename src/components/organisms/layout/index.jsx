import React, { Children } from "react";
import NavbarComponent from "../../molecules/navbar";
import { Route, Routes } from "react-router";

import Mainpage from "../../pages/mainPage";
import SinglePage from "../../pages/singlePage";

const LayoutComponent = () => {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Single" element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default LayoutComponent;
