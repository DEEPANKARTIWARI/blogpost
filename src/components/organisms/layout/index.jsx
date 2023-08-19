import React, { Children } from "react";
import NavbarComponent from "../../molecules/navbar";
import { Routes } from "react-router";

const LayoutComponent = ({ Children }) => {
  return (
    <div>
      <NavbarComponent />
      <Routes>{Children}</Routes>
    </div>
  );
};

export default LayoutComponent;
