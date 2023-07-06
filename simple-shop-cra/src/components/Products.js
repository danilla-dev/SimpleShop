import React, { Children, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ProductsList from "./ProductsList";
import "../styles/Products.scss";

const Products = () => {
  return (
    <div className="products-main-page">
      <ProductsList />
    </div>
  );
};

export default Products;
