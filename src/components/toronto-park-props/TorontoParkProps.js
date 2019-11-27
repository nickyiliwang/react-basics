import React, { Component } from "react";
import FeaturedPark from "./FeaturedPark";
import Header from "./functionalApp";

export default class TorontoParkProps extends Component {
  state = {
    featuredParks: ["park1", "Park2", "park3", "park4"],
    hello: 'hello',
    showPark: true
  };

  toggleParkVisibility = () => {
    this.setState({
      showPark: !this.state.showPark
    });
  };

  deletePark = theParkIndexToDelete => {
    const featuredParkCopy = [...this.state.featuredParks];
    featuredParkCopy = featuredParkCopy.filter((park, i) => {
      return i !== theParkIndexToDelete;
    });

    this.setState({
      featuredParks: featuredParkCopy
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome to Toronto Parks!</h1>
        <Header hello={this.state.hello} />
        <FeaturedPark
          featuredParks={this.state.featuredPark}
          onClick={this.toggleParkVisibility}
        />
        {this.state.showPark ? <h2>HAHAHA</h2> : null}
      </div>
    );
  }
}
