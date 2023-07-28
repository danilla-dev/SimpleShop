import React from "react";
import { Link, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import HeaderImage from "../components/HeaderImage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const handleScroll = () => {
    const homePageOffset = document.querySelector(".home-page").offsetTop;
    window.scrollTo({
      top: homePageOffset - 70,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navigation></Navigation>
      <Route exact path="/">
        <HeaderImage></HeaderImage>
      </Route>
      <FontAwesomeIcon onClick={handleScroll} icon={faCircleDown} />
    </>
  );
};

export default Header;
