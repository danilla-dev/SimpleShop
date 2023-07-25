import React from "react";

import "../styles/HomePage.scss";

import HomePageCategories from "../components/HomePageCategories";

const HomePage = () => {
  return (
    <>
      <div className="home-page wrapper">
        <HomePageCategories />
      </div>
    </>
  );
};

export default HomePage;
