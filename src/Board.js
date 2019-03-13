import React, { Fragment, useState } from "react";
import Box from "./Box";

export default function Board() {
    
  //board state holds player turn
  const [boardState, setBoardState] = useState({
    player: false
  });

  //deconstructing player from boardState prop
  const { player } = boardState;


  //this function will be passed down to children to update state
  const handleClick = () => {
    setBoardState({ ...boardState, player: !player });
    console.log(boxes)
  };

  //generating board boxes by mapping an empty array of length 9 (9 board spots)
  //passing down boardState for state access
  //passing down handleClick to provide a way to alter parent state
  const boxes = [...Array(9)].map((item, index) => (
    <Box
      key={index}
      id={index}
      boardState={boardState}
      handleClick={handleClick}
    />
  ));


  //Renders the boxes in the board with a grid of 3x3
  return (
    <Fragment>
      <h2>Current Player: {player ? "X" : "O"}</h2>
      <div className="board">{boxes}</div>
    </Fragment>
  );
}
