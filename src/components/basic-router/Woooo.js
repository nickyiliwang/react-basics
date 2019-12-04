import React from "react";

export default function Woooo(props) {
  return (
    <div>
      <div>Wooooooooo! {props.match.params.name}</div>
    </div>
  );
}
