import React, { Component } from "react";

export default class Nav extends Component {
  componentWillUnmount() {
    console.log("Nav has unmounted");
  }

  componentDidMount() {
    console.log("Mounted");
  }

  render() {
    return (
      <ul>
        <li>E.T</li>
        <li>Phone</li>
        <li>Home</li>
      </ul>
    );
  }
}
