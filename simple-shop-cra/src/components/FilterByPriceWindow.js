import React, { useState, useContext } from "react";

import { ProductsContext } from "../Contexts/ProductsContext";

import "../styles/FilterByPriceWindow.scss";

const FilterByPriceWindow = () => {
  const { filterByPrice } = useContext(ProductsContext);
  const [range, setRange] = useState(0);

  const handleRange = (e) => {
    filterByPrice(e.target.value);
    setRange(e.target.value);
  };
  return (
    <div className="sort-price">
      <p>Sort by max price: </p>
      <form>
        <input
          onChange={handleRange}
          value={range}
          type="range"
          min="10"
          max="500"
        />
        <div className="range-info">
          <span className="range-info__min info">10</span>
          <span className="range-info__actual info">{range}</span>
          <span className="range-info__max info">500</span>
        </div>
      </form>
    </div>
  );
};

export default FilterByPriceWindow;
