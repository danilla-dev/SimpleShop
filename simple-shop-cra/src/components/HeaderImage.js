import React from "react";
import { useMediaQuery } from "react-responsive";

import heroImageDesktop from "../images/header-desktop.png";
import heroImageMobile from "../images/header-mobile.png";
import "../styles/HeaderImage.scss";

const HeaderImage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1100px)" });
  const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 1101px)" });

  return (
    <div className="header-image">
      {isMobile && (
        <img src={heroImageMobile} alt="Falling Rick and Morty hero image" />
      )}
      {isTabletOrDesktop && (
        <img src={heroImageDesktop} alt="Falling Rick and Morty hero image" />
      )}
    </div>
  );
};

export default HeaderImage;
