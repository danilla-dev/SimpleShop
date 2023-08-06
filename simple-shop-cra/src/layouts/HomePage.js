import React from "react";

import "../styles/HomePage.scss";

import HomePageCategories from "../components/HomePageCategories";
import RatesAboutUs from "../components/RatesAboutUs";
import MostPopularProducts from "../components/MostPopularProducts";
import NewsletterSubscribe from "../components/NewsletterSubscribe";
import StoreStats from "../components/StoreStats";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <HomePageCategories />
        <MostPopularProducts />
        <NewsletterSubscribe />
        <RatesAboutUs />
        <StoreStats />
      </div>
    </>
  );
};

export default HomePage;
