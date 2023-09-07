import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

import products from "../db/products";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const location = useLocation();
  const [priceRange, setPriceRange] = useState();
  const [sortFromLowest, setSortFromLowest] = useState();
  const searchCategory = location.pathname.split("/").pop();
  const lastSortPref = localStorage.getItem("sortItems");

  const handleFilterProducts = (category) => {
    let filterProducts;
    if (sortFromLowest) {
      products.sort((a, b) => a.price - b.price);
    } else {
      products.sort((a, b) => b.price - a.price);
    }
    if (category) {
      filterProducts = products.filter(
        (product) => product.category === category
      );
    } else {
      filterProducts = products;
    }
    return filterProducts;
  };

  let filterProducts = handleFilterProducts(searchCategory);

  if (priceRange) {
    filterProducts = filterProducts.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );
  }
  const handleSortFromLowest = () => {
    setSortFromLowest(!sortFromLowest);
  };
  const handleProductsRange = (priceRange) => {
    setPriceRange(priceRange);
  };
  const productsStatesValues = {
    handleSortFromLowest,
    sortFromLowest,
    handleProductsRange,
    filterProducts,
  };
  const saveSortPrefInLocalStorage = () => {
    localStorage.setItem("sortItems", sortFromLowest || "false");
  };
  saveSortPrefInLocalStorage();
  return (
    <>
      <ProductsContext.Provider value={productsStatesValues}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsProvider;
