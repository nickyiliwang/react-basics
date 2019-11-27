import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      personCount: 0,
      weather: "bad",
      names: ["Annie", "Nunu", "rengar"]
    };
  }

  componentDidMount() {
    console.log("I mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

  incrementCount = () => {
    console.log("clicked");
    this.setState({
      personCount: this.state.personCount + 1,
      weather: "good"
    });
  };

  render() {
    return (
      <div>
        <p>
          This page was visited {this.state.personCount} times, The weather is{" "}
          {this.state.weather}
        </p>

        <button onClick={this.incrementCount}>+++++++++++</button>
        {this.state.names.map(name => {
          return <p key={name}>Hi There, {name}! </p>;
        })}
      </div>
    );
  }
}
