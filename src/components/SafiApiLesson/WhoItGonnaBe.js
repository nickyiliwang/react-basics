import React, { Component } from "react";

// component to let the user select which group of wizards to investigate. Logical flow:
// User selects a cauldron from a select drop down
// whatever the user clicks on, we will save that selection in state.
// on submit . we pass the user's selection up to app.js through a function that was passed down in props

// WHAT WE NEED
// form
// state
// function from props

export default class WhoItGonnaBe extends Component {
  state = {
    userChoice: ""
  };

  weHaveATarget = e => {
    this.setState(
      {
        userChoice: e.target.value
      },
      () => {
        // things will run after the setState finishes
      }
    );
  };

  render() {
    return (
      <div>
        <form action="">
          <select
            name="whichCauldron"
            id="whichCauldron"
            onChange={this.weHaveATarget}
          >
            <option value="">Pick some shit</option>
            <option value="ministryOfMagic">Ministry Of Magic</option>
            <option value="dumbledoresArmy">Dumbledores Army</option>
            <option value="orderOfThePhoenix">Order of the Phenix</option>
          </select>
          <button
            onClick={e => {
              this.props.getCauldronProp(e, this.state.userChoice);
            }}
          >
            Find those pieces of shits
          </button>
        </form>
      </div>
    );
  }
}
