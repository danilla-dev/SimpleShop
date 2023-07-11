import React, { useContext } from "react";

import { ProductsContext } from "../Contexts/ProductsContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { GiAlienFire } from "react-icons/gi";

const Product = ({ listDisplay }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const { filterProducts, productsByPrice } = useContext(ProductsContext);

  const productCName = listDisplay
    ? "main-product main-product--list-display"
    : "main-product";
  const ulCname = listDisplay
    ? "products-main-page__list products-main-page__list--list-display"
    : "products-main-page__list";
  const containerCname = listDisplay
    ? "products-main-page__container products-main-page__container--list-display"
    : "products-main-page__container";

  const allProducts = filterProducts.map((product, index) => {
    return (
      <li key={index}>
        <div className={productCName}>
          <div className="product-image">
            <img
              className="main-product__img"
              src={isDesktop ? product.imageDesk : product.imageMobile}
              alt=""
            />
          </div>
          <div className="product-info">
            <h3 className="main-product__name">{product.title}</h3>
            <p className="main-product__category">{product.category}</p>
            <div className="main-product__price">
              <span>{product.price}</span>
              <GiAlienFire />
            </div>
            <div className="main-product__action-buttons">
              <button className="main-product__action-buttons-add">
                {listDisplay ? "Add " : "Add to cart"}
                <FontAwesomeIcon className="cart-icon" icon={faCartPlus} />
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className={containerCname}>
      <ul className={ulCname}>{allProducts}</ul>
    </div>
  );
};

export default Product;
