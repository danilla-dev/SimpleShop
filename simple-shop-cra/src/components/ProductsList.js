import React, { useState } from "react";

import Product from "./Product";
import ProductsActions from "./ProductsActions";

import "../styles/Product.scss";

// produkty z bazy danych
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
const ProductsList = (props) => {
  const [listDisplay, setListDisplay] = useState(false);
  const [sortFromLowest, setSortFromLowest] = useState(false);

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
    filterProducts.reverse();
    setSortFromLowest(!sortFromLowest);
  };
  const setDisplayOfProducts = () => {
    console.log("display");
  };

  return (
    <>
      <ProductsActions
        display={listDisplay}
        sortFnc={sortProducts}
        displayFnc={setDisplayOfProducts}
        products={filterProducts}
        sortFromLowest={sortFromLowest}
      />
      <Product listDisplay={listDisplay} filterProducts={filterProducts} />
    </>
  );
};

export default ProductsList;
