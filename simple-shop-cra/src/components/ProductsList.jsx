import React, { useState, useContext } from "react";

import Product from "./Product";
// import ProductsContext from "../Contexts/ProductsContext";
import ProductsActions from "./ProductsActions";
import { ProductsContext } from "../Contexts/ProductsContext";

import "../styles/Product.scss";

const ProductsList = () => {
  const [listDisplay, setListDisplay] = useState(false);
  const { filterProducts } = useContext(ProductsContext);

  const setDisplayOfProducts = () => {
    setListDisplay(!listDisplay);
  };

  return (
    <>
      <ProductsActions
        display={listDisplay}
        displayFnc={setDisplayOfProducts}
        products={filterProducts}
      />
      <Product listDisplay={listDisplay} />
    </>
  );
};

export default ProductsList;
