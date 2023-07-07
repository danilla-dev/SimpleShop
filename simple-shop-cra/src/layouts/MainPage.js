import React, { useState } from "react";

import Products from "../components/Products";
import FilterWindow from "../components/FilterWindow";
import { ProductsContext } from "../Contexts/ProductsContext";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

const products = [
  {
    title: "Ray gun",
    category: "Guns",
    price: 200,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/ray-guyn-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/ray-guyn-lg.jpg",
    path: "",
  },
  {
    title: "Ray gun",
    category: "Guns",
    price: 220,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/ray-guyn-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/ray-guyn-lg.jpg",
    path: "",
  },
  {
    title: "Ray gun",
    category: "Guns",
    price: 300,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/ray-guyn-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/ray-guyn-lg.jpg",
    path: "",
  },
  {
    title: "Ray gun",
    category: "Guns",
    price: 270,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/ray-guyn-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/ray-guyn-lg.jpg",
    path: "",
  },
  {
    title: "Plumbus",
    category: "Other",
    price: 20,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/plumbus-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/plumbus-lg.jpg",
    path: "",
  },
  {
    title: "Portal-gun",
    category: "Special",
    price: 200,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg",
    path: "",
  },
  {
    title: "Portal-gun",
    category: "Special",
    price: 200,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg",
    path: "",
  },
  {
    title: "Portal-gun",
    category: "Special",
    price: 200,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg",
    path: "",
  },
  {
    title: "Portal-gun",
    category: "Special",
    price: 200,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg",
    path: "",
  },
  {
    title: "Portal-gun",
    category: "Special",
    price: 320,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg",
    path: "",
  },
];
products.sort((a, b) => a.price - b.price).reverse();

const handleFilterProducts = (category) => {
  let filterProducts;

  if (category) {
    filterProducts = products.filter(
      (product) => product.category === category
    );
  } else {
    filterProducts = products;
  }
  return filterProducts;
};

const MainPage = () => {
  const location = useLocation();
  const searchCategory = location.pathname.split("/").pop();
  const filterProducts = handleFilterProducts(searchCategory);

  const productsContextValue = {
    products,
    filterProducts,
  };
  return (
    <div className="main-page wrapper">
      <ProductsContext.Provider value={productsContextValue}>
        <FilterWindow />
        <Products />
      </ProductsContext.Provider>
    </div>
  );
};

export default MainPage;
