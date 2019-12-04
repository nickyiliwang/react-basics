import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Call me 🐱</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
          consequatur illo aliquid odio illum, corporis sapiente nisi! Ipsum
          cupiditate quam necessitatibus, aliquam et nesciunt maiores tenetur
          soluta molestias esse quisquam. Distinctio, nihil? Iure nobis deleniti
          natus qui aliquam est ut numquam nulla voluptate repellat. Ipsa iure
          ducimus laudantium architecto voluptates.
        </p>
        <p>My phone number is {this.props.contactNumber}</p>
        <Route path="/contact/Brenda" component={Brenda} />
      </div>
    );
  }
}
