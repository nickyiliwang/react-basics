import React, { Component } from "react";
import './artApp.css'
import axios from "axios";
import ArtHeader from "./ArtHeader";
import ArtList from "./ArtList";

export default class RijksMuseumApi extends Component {
  state = {
    artPieces: [],
    url: "https://www.rijksmuseum.nl/api/en/collection"
  };

  componentDidMount() {
    // make a call to the rijks museum api
    // save the info in the state
    // GET request for remote image
    axios
      .get(this.state.url, {
        params: {
          key: "oE9VDE3E",
          q: "van gogh",
          imgonly: true
        }
      })
      .then(res => {
        this.setState({ artPieces: res.data.artObjects });
      });
  }

  render() {
    return (
      <div className="wrapper">
        <header>
          <ArtHeader />
        </header>
        <main>
          <ArtList artPieces={this.state.artPieces} />
        </main>
      </div>
    );
  }
}
