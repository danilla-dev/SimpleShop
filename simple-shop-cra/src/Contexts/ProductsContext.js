import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const ProductsContext = createContext();

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

const handleFilterProductsByCategory = (category) => {
  let filterProductsByCategory;

  if (category) {
    filterProductsByCategory = products.filter(
      (product) => product.category === category
    );
  } else {
    filterProductsByCategory = products;
  }
  return filterProductsByCategory;
};

const ProductsProvider = ({ children }) => {
  const location = useLocation();
  const [priceRange, setPriceRange] = useState();
  const searchCategory = location.pathname.split("/").pop();
  let filterProducts = handleFilterProductsByCategory(searchCategory);

  if (priceRange) {
    filterProducts = filterProducts.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );
  }

  const productsStatesValues = {
    handleProductsRange: (priceRange) => setPriceRange(priceRange),
    filterProducts,
  };

  return (
    <>
      <ProductsContext.Provider value={productsStatesValues}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsProvider;
