import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    user_email: "",
    subject_name: "--- Select subject ---",
    message: "",
  });
  const formRef = useRef();

  const clearForm = () => {
    setFormData({
      user_email: "",
      subject_name: "",
      message: "",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const TEMPLATE = "Contact_us_template";
    const YOUR_SERVICE_ID = "service_dcajkle";
    const PUBLIC_KEY = "2QxF7_EE2bOnWRvdZ";
    emailjs
      .sendForm(YOUR_SERVICE_ID, TEMPLATE, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          clearForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const HandleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <label htmlFor="email">Your email:</label>
      <input
        id="email"
        type="text"
        name="user_email"
        value={formData.user_email}
        onChange={HandleFormChange}
      />
      <label htmlFor="subject">Subject of message</label>
      <select
        id="subject"
        type="text"
        name="subject_name"
        value={formData.subject_name}
        onChange={HandleFormChange}
      >
        <option value="Select subject">--- Select subject ---</option>
        <option value="Order status">Order status</option>
        <option value="Product availability">Product availability</option>
        <option value=""></option>
      </select>
      <label htmlFor="text">Your messsage:</label>
      <textarea
        name="message"
        id="text"
        cols="30"
        rows="5"
        value={formData.message}
        onChange={HandleFormChange}
      ></textarea>
      <button className="footer-form__button">Send question</button>
    </form>
  );
};

export default ContactUsForm;
