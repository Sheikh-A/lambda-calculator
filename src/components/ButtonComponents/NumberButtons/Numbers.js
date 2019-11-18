import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton";

// example of import from data.js. Note all the ../   This is how we move through folders.
/*
import { numbers } from '../../../data'
*/
//Import your array data to from the provided data file
// import Data from "../../../data";

const Numbers = (props) => {
  const { clickHandler, numbers, numberState, setNumberState, setDisplayValue } = props;

  // STEP 2 - add the imported data to state
  const [numbersData] = useState(numbers);

  return (
    <React.Fragment>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
          component matching the name on the provided file.
          Pass it any props needed by the child component. */}
      {
        numbersData.map((number) => {
          return (<NumberButton number={number} clickHandler={clickHandler} setNumberState={setNumberState} setDisplayValue={setDisplayValue} />);
        })
      }
    </React.Fragment>
  );
};

export default Numbers;
