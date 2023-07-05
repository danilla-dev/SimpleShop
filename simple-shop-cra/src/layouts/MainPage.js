import React from "react";

import Products from "../components/Products";
import SortWindow from "../components/FilterWindow";

import { useMediaQuery } from "react-responsive";

const MainPage = () => {
  return (
    <div className="main-page wrapper">
      <SortWindow />
      <Products />
    </div>
  );
};

export default MainPage;
