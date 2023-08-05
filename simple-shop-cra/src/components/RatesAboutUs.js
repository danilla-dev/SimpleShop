import React from "react";

import "../styles/RatesAboutUs.scss";

import { ratesAboutUs } from "../db/Rates";
const RatesAboutUs = () => {
  const rates = ratesAboutUs.map((rate) => {
    const { authorName, authorAvatar, rateText } = rate;
    return (
      <div className="rate">
        <div className="rate__author">
          <img className="rate__author-photo" src={authorAvatar} alt="" />
          <p className="rate__author-name">{authorName}</p>
        </div>
        <div className="rate__text">{rateText}</div>
      </div>
    );
  });
  return (
    <div className="rates-about-us wrapper">
      <h4 className="rates-about-us__header-text">
        Look what other users think about us!
      </h4>
      <div className="rates">{rates}</div>
    </div>
  );
};

export default RatesAboutUs;
