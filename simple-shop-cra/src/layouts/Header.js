import React from "react";
import { Link, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import HeaderImage from "../components/HeaderImage";

const Header = () => {
  return (
    <>
      <Navigation></Navigation>
      <Route exact path="/">
        <HeaderImage></HeaderImage>
      </Route>
    </>
  );
};

export default Header;
