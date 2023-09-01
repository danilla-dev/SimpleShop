import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const formRef = useRef();

  return (
    <form ref={formRef}>
      <label htmlFor="email">Your email:</label>
      <input id="email" type="text" name="user_email" value={email} />
      <label htmlFor="subject">Subject of message</label>
      <input id="subject" type="text" name="subject_name" value={subject} />
      <label htmlFor="text">Your messsage:</label>
      <textarea
        name="message"
        id="text"
        cols="30"
        rows="5"
        value={message}
      ></textarea>
      <button className="footer-form__button">Send question</button>
    </form>
  );
};

export default ContactUsForm;
