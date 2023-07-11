import React, { useState } from "react";

import Products from "../components/Products";
import FilterWindow from "../components/FilterWindow";
import ProductsProvider, { ProductsContext } from "../Contexts/ProductsContext";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

const MainPage = () => {
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
