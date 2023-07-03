import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchForm from "./SearchForm";

import "../styles/ProductsActions.scss";

import {
  faArrowUp91 as SortFromLowIcon,
  faArrowUp19 as SortFromHighIcon,
} from "@fortawesome/free-solid-svg-icons";
import {
  TfiLayoutListThumbAlt as ListIcon,
  TfiLayoutGrid2Alt as GridIcon,
} from "react-icons/tfi";

const ProductsActions = (props) => {
  const { products, sortFnc, display, displayFnc, sortFromLowest } = props;

  const displayIcon = display ? <GridIcon /> : <ListIcon />;

  return (
    <div className="products-actions">
      <div className="products-actions-buttons">
        <div className="products-actions-buttons__sort">
          Sort:
          <FontAwesomeIcon
            onClick={sortFnc}
            icon={sortFromLowest ? SortFromHighIcon : SortFromLowIcon}
          />
        </div>
        <div className="products-actions-buttons__display">
          Display:
          {displayIcon}
        </div>
      </div>
      <SearchForm />
      <p className="products-main-page__counter">
        Count of products:
        <span>{products.length}</span>
      </p>
    </div>
  );
};

export default ProductsActions;
