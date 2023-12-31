import React, { useContext, useState } from "react";

import Categories from "./Categories";
import FilterByPriceWindow from "./FilterByPriceWindow";

import "../styles/FilterWindow.scss";

const FilterWindow = () => {
  const [isShowed, setIsShowed] = useState(false);

  const filterOptionsCname = isShowed
    ? "filter-window__filter-options filter-window__filter-options--active"
    : "filter-window__filter-options";
  const handleShow = () => {
    setIsShowed(!isShowed);
  };

  return (
    <div className="filter-window">
      <p onClick={handleShow} className="filter-window__title">
        Filter products
      </p>
      <div className={filterOptionsCname}>
        <Categories />
        <FilterByPriceWindow />
      </div>
    </div>
  );
};

export default FilterWindow;
