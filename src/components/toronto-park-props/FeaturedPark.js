import React, { Component } from "react";

export default class FeaturedPark extends Component {
  wrapperFunction = () => {
    this.props.onButtonClick(this.props.parkName);
  };

  componentWillUnmount() {
    console.log(`${this.props.parkName} is UNMOUNTING`);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Ill never show up.");
  }

  render() {
    const { parkName, dataKey } = this.props;
    return (
      <div>
        <h2>
          Today's featured park is: {parkName}
          {dataKey}
        </h2>
        <button onClick={this.props.onClick}>Click to hide</button>
        <button onClick={this.wrapperFunction}>Delete Park</button>
      </div>
    );
  }
}
