import React from "react";

import "../styles/HomePage.scss";

import HomePageCategories from "../components/HomePageCategories";
import RatesAboutUs from "../components/RatesAboutUs";
import MostPopularProducts from "../components/MostPopularProducts";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <HomePageCategories />
        <MostPopularProducts />
        <RatesAboutUs />
      </div>
    </>
  );
};

export default HomePage;
