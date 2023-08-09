import React, { useContext } from "react";
import "../styles/NewsletterPopup.scss";

import { PopupContext } from "../Contexts/PopupContext";

const NewsletterPopup = () => {
  const { isDoubleEmail, subscribeNewsletter, setSubscribeNewsletter } =
    useContext(PopupContext);
  const displayStyle = subscribeNewsletter
    ? { display: "block" }
    : { display: "none" };
  const setLockScreen = subscribeNewsletter
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div style={displayStyle} className="newsletter-popup__shadow">
      {setLockScreen}
      <div className="newsletter-popup">
        <p className="newsletter-popup__text">
          {!isDoubleEmail
            ? "You have been subscribed to the newsletter!"
            : "You are already subscribed to our newsletter :("}
        </p>
        <button
          onClick={() => setSubscribeNewsletter(false)}
          className="newsletter-popup__button"
        >
          {!isDoubleEmail ? "Nice!" : "Ok.."}
        </button>
      </div>
    </div>
  );
};

export default NewsletterPopup;
