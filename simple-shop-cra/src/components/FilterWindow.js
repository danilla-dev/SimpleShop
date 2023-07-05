import React from "react";

import Categories from "./Categories";
import FilterByPriceWindow from "./FilterByPriceWindow";

import "../styles/FilterWindow.scss";

const SortWindow = () => {
  return (
    <div className="filter-window">
      <p>Filter products</p>
      <Categories />
      <FilterByPriceWindow />
    </div>
  );
};

export default SortWindow;
