import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/ProductsActions.scss";

import {
  faArrowDown91 as SortFromLowIcon,
  faArrowDown19 as SortFromHighIcon,
  faList,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";

const ProductsActions = (props) => {
  const { products, sortFnc, display, displayFnc, sortFromLowest } = props;

  const displayIcon = display ? (
    <FontAwesomeIcon icon={faTableCells} />
  ) : (
    <FontAwesomeIcon icon={faList} />
  );

  return (
    <div className="products-actions">
      <div className="products-actions-buttons">
        <div className="products-actions-buttons__sort">
          <p>Sort:</p>
          <button onClick={sortFnc}>
            <FontAwesomeIcon
              icon={sortFromLowest ? SortFromHighIcon : SortFromLowIcon}
            />
          </button>
        </div>
        <div className="products-actions-buttons__display">
          <p>Display:</p>
          <button>{displayIcon}</button>
        </div>
      </div>

      <p className="products-main-page__counter">
        We found<span>{products.length}</span>
        {products.length > 1 ? " products" : " product"} for you.
      </p>
    </div>
  );
};

export default ProductsActions;
