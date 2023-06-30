import React from "react";

import Product from "./Product";
import ProductsActions from "./ProductsActions";

import "../styles/Product.scss";

// produkty z bazy danych
const products = [
  {
    title: "Ray gun",
    category: "Guns",
    price: 20,
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
    price: 20,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg",
    path: "",
  },
  {
    title: "Portal-gun",
    category: "Special",
    price: 20,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg",
    path: "",
  },
  {
    title: "Portal-gun",
    category: "Special",
    price: 20,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg",
    path: "",
  },
  {
    title: "Portal-gun",
    category: "Special",
    price: 20,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg",
    path: "",
  },
  {
    title: "Portal-gun",
    category: "Special",
    price: 20,
    imageMobile:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-sm.jpg",
    imageDesk:
      "https://res.cloudinary.com/di3axjqgh/image/upload/v1687886641/InterStore/portal-lg.jpg",
    path: "",
  },
];
const ProductsList = (props) => {
  const searchCategory = props.match.params.id;
  let filterProducts;

  if (searchCategory) {
    filterProducts = products.filter(
      (product) => product.category === searchCategory
    );
  } else {
    filterProducts = products;
  }

  const sortProducts = () => {
    console.log("sort");
  };
	
  return (
    <>
      <ProductsActions sort={sortProducts} products={filterProducts} />
      <Product filterProducts={filterProducts} />
    </>
  );
};

export default ProductsList;
