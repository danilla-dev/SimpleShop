import React from "react";
import "../styles/Footer.scss";

import { PiSpiralFill } from "react-icons/pi";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="contact-us__background">
        <div className="contact-us wrapper">
          <div className="nav__logo">
            <PiSpiralFill className="nav__logo-icon" />
            <span>InterStore</span>
          </div>
          <div className="contact-us__contact-form">
            <div className="contact-us__header">Contact us.</div>
            <form>
              <label htmlFor="email">Your email:</label>
              <input id="email" type="text" />
              <label htmlFor="subject">Subject of message</label>
              <input id="subject" type="text" />
              <label htmlFor="text">Your messsage:</label>
              <textarea name="text" id="text" cols="30" rows="5"></textarea>
              <button className="footer-form__button">Send question</button>
            </form>
          </div>
        </div>
      </div>
      <div className="author-description">
        Created by <a href="https://github.com/Danilla-dev">Danilla-dev</a>
      </div>
    </>
  );
};

export default Footer;
