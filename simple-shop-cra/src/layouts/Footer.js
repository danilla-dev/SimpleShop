import React from "react";
import "../styles/Footer.scss";

import { PiSpiralFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer__background">
      <div className="footer wrapper">
        <div className="nav__logo">
          <PiSpiralFill className="nav__logo-icon" />
          <h1 className="nav__logo-text">
            <span>InterStore</span>
          </h1>
        </div>
        <div className="footer__contact-form">
          <form>
            <label htmlFor="email">Your email:</label>
            <input id="email" type="text" />
            <label htmlFor="subject">Subject of message</label>
            <input id="subject" type="text" />
            <label htmlFor="text">Your messsage:</label>
            <textarea name="text" id="text" cols="30" rows="10"></textarea>
            <button></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
