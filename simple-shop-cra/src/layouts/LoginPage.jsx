import React, { useContext, useState, useEffect } from "react";

import { useHistory, Link } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../db/firebaseConfig";

import { UserContext } from "../Contexts/userContext";

import "../styles/AccountForms.scss";
import "../styles/LoginPage.scss";
const LoginPage = () => {
  const auth = getAuth(app);
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorType, setErrorType] = useState({
    email: false,
    password: false,
    user: false,
  });
  const errorMessages = {
    invalidEmail: "Invalid email address.",
    invalidPassword: "Invalid password.",
    invalidUser: "User don't found.",
  };
  const { setUserId } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showErrors = (type) => {
    if (type === "auth/invalid-email") {
      setErrorType({
        email: true,
        password: false,
        user: false,
      });
    } else if (type === "auth/wrong-password") {
      setErrorType({
        email: false,
        password: true,
        user: false,
      });
    } else if (type === "auth/user-not-found") {
      setErrorType({
        email: false,
        password: false,
        user: true,
      });
    }
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserId(user.uid);
        history.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        showErrors(errorCode);
      });
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <h2>Login</h2>
      <div className="login-form">
        <form onSubmit={handleLoginUser}>
          <p className="error">
            {errorType.user && errorMessages.invalidUser}
            {errorType.email && errorMessages.invalidEmail}
            {errorType.password && errorMessages.invalidPassword}
          </p>
          <label htmlFor="user-email">Email address</label>
          <input
            type="text"
            name="email"
            onChange={handleOnChange}
            value={formData.email}
          />
          <label htmlFor="user-password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleOnChange}
            value={formData.password}
          />
          <button>Login</button>
          <p>You don't have account yet? Let's sign-up.</p>
          <Link to={"/register"}>
            <button className="login-form__register-btn">Register</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
