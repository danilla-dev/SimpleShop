import "./styles/App.scss";
import React, { Component, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { app } from "./db/firebaseConfig";

import Header from "./layouts/Header";
import MainPage from "./layouts/MainPage";
import Footer from "./layouts/Footer";
import HomePage from "./layouts/HomePage";
import NewsletterPopup from "./components/NewsletterPopup";
import LoadingPage from "./components/LoadingPage";
import RegisterPage from "./layouts/RegisterPage";
import LoginPage from "./layouts/LoginPage";

import PopupProvider from "./Contexts/PopupContext";
import { UserContext } from "./Contexts/userContext";

const App = () => {
  const { isLoading } = useContext(UserContext);
  return (
    <Router>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="App app-container">
          <PopupProvider>
            <NewsletterPopup />
            <header>{<Header />}</header>
            <main>
              <Switch>
                <Route exact path="/">
                  <section className="home-page-section">
                    {<HomePage />}
                  </section>
                </Route>
                <Route path="/products">
                  <section className="main-page-section">
                    {<MainPage />}
                  </section>
                </Route>
                <Route exact path="/login">
                  <section className="login-page-section">
                    {<LoginPage />}
                  </section>
                </Route>
                <Route exact path="/register">
                  <section className="register-page-section">
                    {<RegisterPage />}
                  </section>
                </Route>
              </Switch>
            </main>
            <footer>{<Footer />}</footer>
          </PopupProvider>
        </div>
      )}
    </Router>
  );
};

export default App;
