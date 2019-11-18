import React from "react";

export const SpecialButton = (props) => {
  const { special, clickHandler } = props;

  return (
    <button onClick={clickHandler(special)} className={"button button-special"}>
      {/* Display a button element rendering the data being passed down from the parent container on props. */}
      {special}
    </button>
  );
};

export default SpecialButton;
