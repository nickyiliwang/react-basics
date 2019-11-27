import React, { Component } from "react";
import animals from "./petsInfo";

class PetsList extends Component {
  render() {
    return (
      <ul>
        {animals.map(animal => {
          return (
            <li key={animal.name}>
              <h2>Animal Name: {animal.name}</h2>
              <img src={animal.picture} alt={animal.name} />
              <p>Description Of Animal</p>
              <p>
                {animal.name} is a {animal.size} sized {animal.type}
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PetsList;
