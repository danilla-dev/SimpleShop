import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductsContext } from "../Contexts/ProductsContext";

import "../styles/ProductsActions.scss";

import {
  faArrowDown91 as SortFromLowIcon,
  faArrowDown19 as SortFromHighIcon,
  faList,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";

const ProductsActions = (props) => {
  const { display, displayFnc } = props;
  const { handleSortFromLowest, sortFromLowest, filterProducts } =
    useContext(ProductsContext);

  const displayIcon = display ? (
    <FontAwesomeIcon icon={faTableCells} />
  ) : (
    <FontAwesomeIcon icon={faList} />
  );

  const sortIcon = sortFromLowest ? (
    <FontAwesomeIcon icon={SortFromHighIcon} />
  ) : (
    <FontAwesomeIcon icon={SortFromLowIcon} />
  );

  return (
    <div className="products-actions">
      <div className="products-actions-buttons">
        <div className="products-actions-buttons__sort">
          <button onClick={handleSortFromLowest}>{sortIcon}</button>
        </div>
        <div className="products-actions-buttons__display">
          <button onClick={displayFnc}>{displayIcon}</button>
        </div>
      </div>
      <p className="products-main-page__counter">
        We found<span>{filterProducts.length}</span>
        {filterProducts.length > 1 ? " products" : " product"} for you.
      </p>
    </div>
  );
};

export default ProductsActions;
