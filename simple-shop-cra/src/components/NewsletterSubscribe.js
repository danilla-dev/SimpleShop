import React from "react";

import "../styles/NewsletterSubscribe.scss";
const NewsletterSubscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="newsletter-subscribe__background">
      <div className="newsletter-subscribe">
        <h4>
          Dont waste time and money, subscribe our newsletter to better offerts!
        </h4>
        <div className="newsletter-subscribe__form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email-for-newsletter">
              Your email adress:
              <input id="email-for-newsletter" type="text" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
