import React from "react";
import "../styles/Footer.scss";

import ContactUsForm from "../components/ContactUsForm";

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
            <ContactUsForm />
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
