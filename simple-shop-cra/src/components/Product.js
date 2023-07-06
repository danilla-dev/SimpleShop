import React, { useContext } from "react";

import { ProductsContext } from "../Contexts/ProductsContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { GiAlienFire } from "react-icons/gi";

const Product = ({ listDisplay }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const { filterProducts, productsByPrice } = useContext(ProductsContext);


/// problem polega na tym ze gdy zmieniam kategorie kiedy jest wybrana jakas cena musze ponownie poruszyc suwakiem abyh to sie odwierzylo i wyswietlilo poprawne produkty a nie te wczesniejsze 
// Najlepiej jak zmienie ten suwak na po prostu pole do wpisania min i max ceny

  // const targetProducts = filterByPrice ? filterByPrice : filterProducts;

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

  return (
    <div className="products-main-page__container">
      <ul className={ulCname}>{allProducts}</ul>;
    </div>
  );
};

export default Product;
