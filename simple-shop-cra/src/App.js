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
import AccountPanel from "./layouts/AccountPanel";
import Footer from "./layouts/Footer";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App app-container">
          <header>{<Header />}</header>
          <main>
            <section id="main-page">{<MainPage />}</section>
            <aside>
              <Switch>
                <Route path="*" component={AccountPanel}></Route>
              </Switch>
            </aside>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
