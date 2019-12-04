import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Woooo from './Woooo'

export default class App extends Component {
  state = {
    phoneNumber: "416-967-1111"
  };

  render() {
    return (
      <Router>
        <nav>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
          <NavLink activeClassName="active" to="/contact/breanda">
            Brenda
          </NavLink>
        </nav>
        <div>
          <h1>My Sweet Portfolio Page!</h1>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/contact"
            render={() => {
              <Contact contactNumber={this.state.phoneNumber} />;
            }}
          />
          <Route path="/wooo/:name" component={Woooo} />
        </div>
      </Router>
    );
  }
}
