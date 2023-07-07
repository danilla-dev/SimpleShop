import React, { useState, useContext } from "react";

import { ProductsContext } from "../Contexts/ProductsContext";

import "../styles/FilterByPriceWindow.scss";

const FilterByPriceWindow = () => {
  const { filterByPrice } = useContext(ProductsContext);
  const [minPrice, setMinPrice] = useState("1");
  const [maxPrice, setMaxPrice] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 1, max: 2 });

  const handleValueChange = ({ target, keyCode }) => {
    const value = target.value.split(" ").join("");

    if (value >= 0) {
      if (target.name === "min") {
        setMinPrice(value);
        if (keyCode === 8 && minPrice.length === 1) {
          setMinPrice("");
        }
      }
      if (target.name === "max") {
        setMaxPrice(value);
        if (keyCode === 8 && maxPrice.length === 1) {
          setMaxPrice("");
        }
      }
    }
  };

  return (
    <div className="sort-price">
      <p>Sort by max price: </p>
      <form>
        <input
          className="sort-price_min-value"
          name="min"
          type="text"
          onChange={handleValueChange}
          onKeyDown={handleValueChange}
          value={minPrice}
        />
        <input
          className="sort-price_max-value"
          name="max"
          type="text"
          onChange={handleValueChange}
          onKeyDown={handleValueChange}
          value={maxPrice}
        />
      </form>
    </div>
  );
};

export default FilterByPriceWindow;
