import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";

export default class LifeCycleReview extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true
    };
  }

  viewNav = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    return (
      <main>
        <Header />
        <button onClick={this.viewNav}>View Nav</button>
        {this.state.isVisible ? <Nav /> : null}
      </main>
    );
  }
}
