import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/ProductsActions.scss";

import {
  faArrowDown19 as SortFromLowIcon,
  faArrowDown91 as SortFromHighIcon,
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
          <FontAwesomeIcon
            onClick={sortFnc}
            icon={sortFromLowest ? SortFromHighIcon : SortFromLowIcon}
          />
        </div>
        <div className="products-actions-buttons__display">
          <p>Display:</p>
          {displayIcon}
        </div>
      </div>

      <p className="products-main-page__counter">
        We found<span>{products.length}</span>{" "}
        {products.length > 1 ? "products" : "product"} for you.
      </p>
    </div>
  );
};

export default ProductsActions;
