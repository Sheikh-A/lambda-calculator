import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file
// import Data from "../../../data";

const Operators = (props) => {
  const { clickHandler, operators, setDisplayValue } = props;

  // STEP 2 - add the imported data to state
  const [operatorsData] = useState(operators);

  return (
    <React.Fragment>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
          component matching the name on the provided file.
          Pass it any props needed by the child component. */}
      {
        operatorsData.map((operator) => {
          const char = operator.char;
          const value = operator.value;

          return (<OperatorButton operatorChar={char} operatorValue={value} clickHandler={clickHandler} setDisplayValue={setDisplayValue} />);
        })
      }
    </React.Fragment>
  );
};

export default Operators;
