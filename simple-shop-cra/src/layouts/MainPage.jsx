import React, { useState, useEffect } from "react";

import Products from "../components/Products";
import FilterWindow from "../components/FilterWindow";
import ProductsProvider from "../Contexts/ProductsContext";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-page wrapper">
      <ProductsProvider>
        <FilterWindow />
        <Products />
      </ProductsProvider>
    </div>
  );
};

export default MainPage;
