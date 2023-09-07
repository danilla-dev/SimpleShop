import React, { useContext, useEffect, useRef, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import { useHistory, Link } from "react-router-dom";

import { UserContext } from "../Contexts/userContext";

import { app } from "../db/firebaseConfig";

import "../styles/RegisterPage.scss";
import "../styles/AccountForms.scss";

const RegisterPage = () => {
  const registerForm = useRef();

  const history = useHistory();

  const [formData, setFormData] = useState({
    passwordRepeat: "",
    username: "",
    email: "",
    password: "",
  });
  const auth = getAuth(app);

  const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
  const unexpectedCharacter = [" ", "@", "!", "#", "$", "%", "^", "&", "*"];

  const errorMessages = {
    usernameErrMess: "Min length of username is 5.",
    usernameUnexpectedErrMess: `Unexpected character. ( ${unexpectedCharacter} )`,
    passwordErrMess: "Min length of email is 9.",
    passwordsErrMess: "Passwords is not same.",
    emailErrMess: "Invalid email.",
  };

  useEffect(() => {
    setPersistence(auth, browserSessionPersistence).then(() => {});
    window.scrollTo(0, 0);
    const submitButton = registerForm.current.querySelector("button");
    const errors = registerForm.current.querySelector(".error");
    const formDataArray = [...Object.values(formData)];
    if (errors || formDataArray.some((data) => data === "")) {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  }, [formData]);

  const clearForm = () => {
    setFormData({ passwordRepeat: "", username: "", email: "", password: "" });
  };

  const createNewUser = (formData) => {
    const { email, password } = formData;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        clearForm();
        history.push("/");
      })
      .catch((error) => {});
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = registerForm.current.querySelectorAll(".error").length;
    if (!errors) {
      createNewUser(formData);
    } else {
      console.log("bledy w formularzu");
    }
  };
  const { username, email, password, passwordRepeat } = formData;
  const {
    usernameErrMess,
    emailErrMess,
    passwordErrMess,
    passwordsErrMess,
    usernameUnexpectedErrMess,
  } = errorMessages;
  return (
    <>
      <h2>Join to us!</h2>
      <div className="register-form">
        <form ref={registerForm} onSubmit={handleSubmit}>
          <label htmlFor="user-name">Username:</label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={handleOnChange}
          />
          {(username.length < 6) & (username.length > 0) ? (
            <p className="error">{usernameErrMess}</p>
          ) : null}
          {unexpectedCharacter.some((char) => username.includes(char)) ? (
            <p className="error">{usernameUnexpectedErrMess}</p>
          ) : null}
          <label htmlFor="user-email">Email:</label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={handleOnChange}
          />

          {!emailRegExp.test(email) & (email !== "") ? (
            <p className="error">{emailErrMess}</p>
          ) : null}
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            value={password}
            onChange={handleOnChange}
            type="password"
          />
          {(password.length < 8) & (password.length > 0) ? (
            <p className="error">{passwordErrMess}</p>
          ) : null}
          <label htmlFor="password-repeat">Repeat password:</label>
          <input
            name="passwordRepeat"
            value={passwordRepeat}
            onChange={handleOnChange}
            type="password"
          />
          {password !== passwordRepeat && (
            <p className="error">{passwordsErrMess}</p>
          )}
          <button type="submit" disabled={true}>
            Register
          </button>
          <p>You have account already? Lets sing-in.</p>
          <Link to={"/login"}>
            <button className="register-form__login-btn">Login</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
