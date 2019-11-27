import React from "react";
import ArtPiece from './ArtPiece'

const ArtList = (props) => {
  return (
    <ul>
      {/* render the list of art from this.state.artPieces using map */}
      {props.artPieces.map((art, i) => {
        return (
            <ArtPiece art={art} key={i} />
        );
      })}
    </ul>
  );
};

export default ArtList;
