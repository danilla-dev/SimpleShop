import React from "react";

import "../styles/NewsletterSubscribe.scss";

import NewsletterSubscribeForm from "./NewsletterSubscribeForm";
const NewsletterSubscribe = () => {
  return (
    <div className="newsletter-subscribe__background">
      <div className="newsletter-subscribe">
        <h4>
          Don't waste time and money, subscribe our newsletter to get better
          offerts!
        </h4>
        <NewsletterSubscribeForm />
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
