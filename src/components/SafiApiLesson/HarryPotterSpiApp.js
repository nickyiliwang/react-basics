import React, { Component } from "react";
import axios from "axios";

export default class HarryPotterSpiApp extends Component {
  state = {
    allZards: [],
    shitheads: []
  };

  componentDidMount() {
    axios.get("https://www.potterapi.com/v1/characters", {
      params: {
        key: "$2a$10$b2aADeidPYFxEciuSv6NN.8wUGBaiZD6nBak01j8S3uDKUHoqDW.y"
      }
    }).then(data => {
        console.log(data.data)
    })
  }

  // Hit up the API (WHICH WILL WORK THIS TIME) and get all the HP characters
  // Get user selection of which group of wizards they want to investigate
  // Filter the characters for just those in the selected wizard group (zoological name: CAULDRON)
  // Filter that group of wizards and find the shitheads
  // print the shitheads to the page, to shame them publicly

  render() {
    return (
      <div>
        <h1>Let's GET these motherfuckers!!!</h1>
      </div>
    );
  }
}
