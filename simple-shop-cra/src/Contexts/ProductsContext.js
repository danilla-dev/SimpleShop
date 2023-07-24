import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import products from "../db/products";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const location = useLocation();
  const [priceRange, setPriceRange] = useState();
  const [sortFromLowest, setSortFromLowest] = useState(false);
  const searchCategory = location.pathname.split("/").pop();

  const handleFilterProductsByCategory = (category) => {
    let filterProductsByCategory;
    if (sortFromLowest) {
      products.sort((a, b) => a.price - b.price);
    } else {
      products.sort((a, b) => b.price - a.price);
    }
    if (category) {
      filterProductsByCategory = products.filter(
        (product) => product.category === category
      );
    } else {
      filterProductsByCategory = products;
    }
    return filterProductsByCategory;
  };

  let filterProducts = handleFilterProductsByCategory(searchCategory);

  if (priceRange) {
    filterProducts = filterProducts.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );
  }
  const handleSortFromLowest = () => {
    setSortFromLowest(!sortFromLowest);
  };
  const productsStatesValues = {
    handleSortFromLowest,
    sortFromLowest,
    handleProductsRange: (priceRange) => setPriceRange(priceRange),
    filterProducts,
  };

  return (
    <>
      <ProductsContext.Provider value={productsStatesValues}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsProvider;
