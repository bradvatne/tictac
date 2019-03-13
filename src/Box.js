import React, { useState } from "react";

//individual boxes which are rendered by map
const Box = props => {
  //box state determines the value it displays (x or o)
  const [status, setStatus] = useState("");

  //destructure props for easier accesss
  const { id, boardState, handleClick } = props;

  //onClick function to update parent state (change player) and update this component's state (x or o value)
  function onClick() {
    handleClick();
    boardState.player ? setStatus("X") : setStatus("O");
  }

  //renders a div using props
  return (
    <div id={id} className="box" onClick={() => onClick()}>
      <div className="status">{status}</div>
    </div>
  );
};

export default Box;
