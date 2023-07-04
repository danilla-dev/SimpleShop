import React from "react";
import Categories from "./Categories";

import Products from "../components/Products";

import { useMediaQuery } from "react-responsive";

const MainPage = () => {
 
  return (
    <div className="main-page wrapper">
      <Categories />
      <Products />
    </div>
  );
};

export default MainPage;
