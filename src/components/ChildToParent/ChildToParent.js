import React, { Component } from "react";

let number = 0;
export default class ChildToParent extends Component {

  handleOnClick = () => {
    number++;
    this.props.increment(number);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Increment</button>
      </div>
    );
  }
}
