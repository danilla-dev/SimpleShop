import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { GiAlienFire } from "react-icons/gi";

const Product = ({ filterProducts, listDisplay }) => {

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const productCName = listDisplay
    ? "main-product main-product--list-display"
    : "main-product";
  const ulCname = listDisplay
    ? "products-main-page__list products-main-page__list--list-display"
    : "products-main-page__list";

  const allProducts = filterProducts.map((product, index) => {
    return (
      <li key={index}>
        <div className={productCName}>
          <img
            className="main-product__img"
            src={isDesktop ? product.imageDesk : product.imageMobile}
            alt=""
          />
          <h3 className="main-product__name">{product.title}</h3>
          <p className="main-product__category">{product.category}</p>
          <div className="main-product__price">
            <span>{product.price}</span>
            <GiAlienFire />
          </div>
          <div className="main-product__action-buttons">
            <button className="main-product__action-buttons-add">
              Add to cart
              <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
            </button>
          </div>
        </div>
      </li>
    );
  });

  return <ul className={ulCname}>{allProducts}</ul>;
};

export default Product;
