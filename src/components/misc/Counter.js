import React, { Component } from "react";


class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h2>COUNT IS {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <h2>Blog Posts</h2>
      </div>
    );
  }
}

export default Counter;
