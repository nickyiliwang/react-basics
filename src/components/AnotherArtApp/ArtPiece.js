import React from "react";

export default function ArtPiece(props) {
  return (
    <li>
      <h2>{props.art.title}</h2>
      <img src={props.art.webImage.url} alt="" />
      <p>{props.art.longTitle}</p>
    </li>
  );
}
