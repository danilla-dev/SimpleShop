import React, { useState, useContext, useRef } from "react";
import { nanoid } from "nanoid";
import { getDatabase, ref, set, child, get } from "firebase/database";
import emailjs from "@emailjs/browser";

import { app } from "../db/firebaseConfig";

import { PopupContext } from "../Contexts/PopupContext";

const NewsletterSubscribeForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const { setSubscribeNewsletter, setIsDoubleEmail } = useContext(PopupContext);
  const formRef = useRef();

  const sendEmail = (form) => {
    console.log(form.current);
    const TEMPLATE = "Newsletter_template";
    const YOUR_SERVICE_ID = "service_dcajkle";
    const PUBLIC_KEY = "2QxF7_EE2bOnWRvdZ";
    emailjs.sendForm(YOUR_SERVICE_ID, TEMPLATE, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const writeUserData = async (mail) => {
    console.log("ok wysyłamy maila");
    const db = getDatabase(app);
    const UID = nanoid();
    await set(ref(db, `/newsletterUsers/${UID}`), {
      mail,
    });
    setSubscribeNewsletter(true);
    sendEmail(formRef);
  };

  // --------------------------------------------------------------
  const checkForUserDouble = (users) => {
    const usersArray = Object.values(users);
    let isDouble = false;
    usersArray.forEach((email) => {
      if (email.mail === userEmail) {
        console.log("Jest dubel, nie wysyłaj maila");
        isDouble = true;
      }
    });
    if (isDouble) {
      setSubscribeNewsletter(true);
      setIsDoubleEmail(true);
    } else {
      writeUserData(userEmail);
      setIsDoubleEmail(false);
    }
  };

  // --------------------------------------------------------------
  const getAllNewsletterUsers = () => {
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, `newsletterUsers`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          checkForUserDouble(snapshot.val());
        } else {
          writeUserData(userEmail);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // --------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    getAllNewsletterUsers();
  };

  // --------------------------------------------------------------
  const handleOnChange = (e) => {
    setUserEmail(e.target.value);
  };

  // --------------------------------------------------------------
  return (
    <div className="newsletter-subscribe__form">
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="email-for-newsletter">Your email address:</label>
        <input
          id="email-for-newsletter"
          type="text"
          name="user_email"
          placeholder="Your e-mail"
          onChange={handleOnChange}
          value={userEmail}
        />
        <button className="submit-btn">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterSubscribeForm;
