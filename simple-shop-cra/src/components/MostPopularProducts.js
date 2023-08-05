import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { GiAlienFire } from "react-icons/gi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/MostPopularProducts.scss";

import { popularProducts } from "../db/PopularProducts";

const MostPopularProducts = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });

  let percentageForSlides = 50;
  if (isDesktop) {
    percentageForSlides = 25;
  } else if (isTablet) {
    percentageForSlides = 33;
  }

  const products = popularProducts.map((product, index) => {
    return (
      <li key={index}>
        <div className={"product" + " " + product.title}>
          <div className="product-image">
            <img
              src={isTablet ? product.imageDesk : product.imageMobile}
              alt=""
            />
          </div>
          <div className="product-info">
            <h3 className="product__name">{product.title}</h3>
            <p className="product__category">{product.category}</p>
            <div className="product__price">
              <span>{product.price}</span>
              <GiAlienFire />
            </div>
            <div className="product__action-buttons">
              <button className="product__action-buttons-add">
                <span>Add</span>
                <FontAwesomeIcon className="cart-icon" icon={faCartPlus} />
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="most-popular-products__background">
      <div className="most-popular-products wrapper">
        <h2 className="most-popular-products__header">
          Most popular products on last time.
        </h2>
        <div className="most-popular-products__carousel">
          <Carousel
            autoPlay="true"
            infiniteLoop="true"
            stopOnHover="true"
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            centerMode={true}
            centerSlidePercentage={percentageForSlides}
            interval={5000}
          >
            {products}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MostPopularProducts;
