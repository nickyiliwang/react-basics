import React, { Component } from "react";
import ChildToParent from "./ChildToParent";

export default class Parent extends Component {
  state = {
    counter: 0
  };

  handleCounterIncrement = number => {
    this.setState({
      counter: number
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <ChildToParent increment={this.handleCounterIncrement} />
      </div>
    );
  }
}
