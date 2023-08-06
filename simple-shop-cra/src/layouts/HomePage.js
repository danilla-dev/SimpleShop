import React from "react";

import "../styles/HomePage.scss";

import HomePageCategories from "../components/HomePageCategories";
import RatesAboutUs from "../components/RatesAboutUs";
import MostPopularProducts from "../components/MostPopularProducts";
import NewsletterSubscribe from "../components/NewsletterSubscribe";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <HomePageCategories />
        <MostPopularProducts />
        <NewsletterSubscribe />
        <RatesAboutUs />
        <div className="test" style={{ height: 400 }}></div>
      </div>
    </>
  );
};

export default HomePage;
