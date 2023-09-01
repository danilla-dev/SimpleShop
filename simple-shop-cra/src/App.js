import "./styles/App.scss";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Header from "./layouts/Header";
import MainPage from "./layouts/MainPage";
import Footer from "./layouts/Footer";
import HomePage from "./layouts/HomePage";
import NewsletterPopup from "./components/NewsletterPopup";

import PopupProvider from "./Contexts/PopupContext";

class App extends Component {
  render() {
    return (
      <Router>
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
              </Switch>
            </main>
            <footer>{<Footer />}</footer>
          </PopupProvider>
        </div>
      </Router>
    );
  }
}

export default App;
