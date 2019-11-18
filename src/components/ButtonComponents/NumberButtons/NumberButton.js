import React from "react";
import { numbers } from "../../../data";

export const NumberButton = (props) => {
  const { number, clickHandler, setDisplayValue } = props;
  const setClassZero = () => { return number === "0" ? "button-number-zero" : ""; };
  const buttonClass = setClassZero();

  return (
    <button onClick={clickNumber(number)} className={`button button-number `+buttonClass}>
      {/* Display a button element rendering the data being passed down from the parent container on props. */}
      {number}
    </button>
  );

  function clickNumber(number) {
    setDisplayValue(numbers);
  }
};

export default NumberButton;
