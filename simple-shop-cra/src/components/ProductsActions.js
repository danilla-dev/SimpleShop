import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp91, faArrowUp19 } from "@fortawesome/free-solid-svg-icons";
import { TfiLayoutListThumbAlt, TfiLayoutGrid2Alt } from "react-icons/tfi";

const ProductsActions = (props) => {
  const { products, sortFnc, display, displayFnc, sortFromLowest } = props;

  const displayIcon = display ? (
    <TfiLayoutGrid2Alt />
  ) : (
    <TfiLayoutListThumbAlt />
  );

  return (
    <div className="products-actions">
      <div className="products-actions__sort">
        <FontAwesomeIcon
          onClick={sortFnc}
          icon={sortFromLowest ? faArrowUp91 : faArrowUp19}
        />
      </div>
      <div className="products-actions__display">{displayIcon}</div>

      <p className="products-main-page__counter">
        Count of products:
        <span>{products.length}</span>
      </p>
    </div>
  );
};

export default ProductsActions;
