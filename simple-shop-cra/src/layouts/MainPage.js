import React from "react";
import Categories from "./Categories";
import Products from "../components/Products";
import HelloRick from "../components/HelloRick";
import { useMediaQuery } from "react-responsive";

const MainPage = () => {
  const isTablet = useMediaQuery({ query: "(min-width:768px)" });
  return (
    <div className="main-page wrapper">
      <Categories />
      <Products />
    </div>
  );
};

export default MainPage;
