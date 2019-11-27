import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    console.log("");
  }

  componentDidMount() {
    console.log("The Header has mounted");
  }

  render() {
    console.log("DJ Khaled");
    return (
      <div>
        <h1>SOMETHING</h1>
      </div>
    );
  }
}
