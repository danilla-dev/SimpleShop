import React, { useState, useContext } from "react";

import { ProductsContext } from "../Contexts/ProductsContext";

import "../styles/FilterByPriceWindow.scss";

const FilterByPriceWindow = () => {
  const { filterByPrice } = useContext(ProductsContext);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 1, max: 2 });
  const [isCorrectRange, setIsCorrectRange] = useState(true);

  const handleValueChange = ({ target, keyCode }) => {
    const value = target.value.replace(/\s/g, "");
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
  const handleSetPrice = (e) => {
    e.preventDefault();
    const min = parseInt(minPrice);
    const max = parseInt(maxPrice);
    if (min > max) {
      console.log("zla wartosc od do ");
      setIsCorrectRange(false);
    } else {
      setPriceRange({
        min,
        max,
      });
      setIsCorrectRange(true);
    }
  };

  return (
    <div className="sort-price">
      <p>Sort by price: </p>
      <form>
        <label htmlFor="min">
          Min:
          <input
            className="sort-price_min-value"
            name="min"
            type="text"
            onChange={handleValueChange}
            onKeyDown={handleValueChange}
            value={minPrice}
          />
        </label>
        <label htmlFor="max">
          Max:
          <input
            className="sort-price_max-value"
            name="max"
            type="text"
            onChange={handleValueChange}
            onKeyDown={handleValueChange}
            value={maxPrice}
          />
          {!isCorrectRange && <p>Incorrect value of price</p>}
        </label>
        <button onClick={handleSetPrice}>Set price</button>
      </form>
    </div>
  );
};

export default FilterByPriceWindow;
