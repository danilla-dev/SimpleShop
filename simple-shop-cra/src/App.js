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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App app-container">
          <header>{<Header />}</header>
          <main>
            <section id="main-page">{<MainPage />}</section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
