import React, { useState, useContext } from "react";

import { ProductsContext } from "../Contexts/ProductsContext";

import "../styles/FilterByPriceWindow.scss";

const FilterByPriceWindow = () => {
  const { handleProductsRange } = useContext(ProductsContext);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [priceRange, setPriceRange] = useState();
  const [isCorrectRange, setIsCorrectRange] = useState(true);

  priceRange && handleProductsRange(priceRange);

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
    if (min > max || !(min && max)) {
      setIsCorrectRange(false);
    } else {
      setPriceRange({
        min,
        max,
      });
      setIsCorrectRange(true);
    }
  };
  const errorVisibleStyle = isCorrectRange
    ? { visibility: "hidden" }
    : { visibility: "visible" };
  const errorMaxInputStyle = isCorrectRange
    ? null
    : { border: "2px solid tomato", borderRadius: 5 };
  return (
    <div className="sort-price">
      <p className="sort-price__title">Filter by price: </p>
      <form onSubmit={handleSetPrice} className="sort-price-form">
        <div className="sort-price-form__inputs">
          <div className="sort-price-form__inputs-min">
            <label className="sort-price-form__inputs-min-label" htmlFor="min">
              Min:
            </label>

            <input
              className="sort-price-form__inputs-min-input"
              name="min"
              type="text"
              onChange={handleValueChange}
              onKeyDown={handleValueChange}
              value={minPrice}
              placeholder="Min"
            />
          </div>
          <div className="sort-price-form__inputs-max">
            <label className="sort-price-form__inputs-max-label" htmlFor="max">
              Max:
            </label>
            <input
              className="sort-price-form__inputs-min-input"
              name="max"
              type="text"
              onChange={handleValueChange}
              onKeyDown={handleValueChange}
              value={maxPrice}
              placeholder="Max"
              style={errorMaxInputStyle}
            />
          </div>
        </div>

        <button className="sort-price-form__button">Set price</button>
        <p style={errorVisibleStyle} className="sort-price-form__error">
          Incorrect value of price
        </p>
      </form>
    </div>
  );
};

export default FilterByPriceWindow;
