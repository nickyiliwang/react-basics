import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Catalogue from "./Catalogue";
import SingleMovieInfo from "./SingleMovieInfo";

export default class App extends Component {
  state = {
    movieList: []
  };

  render() {
    return (
      <Router>
        <div>
          <header className="top-header">
            <h1>Hackflix</h1>
            <nav>
              <Link to="/">Catalogue</Link> 
            </nav>
          </header>
          <Route exact path="/" component={Catalogue} />
          <Route path="/movie/:id" component={SingleMovieInfo} />
        </div>
      </Router>
    );
  }
}
