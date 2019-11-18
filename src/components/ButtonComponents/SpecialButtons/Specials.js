import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
// import Data from "../../../data";

const Specials = (props) => {
  const { clickHandler, specials, setDisplayValue } = props;

  // STEP 2 - add the imported data to state
  const [specialsData] = useState(specials);

  return (
    <React.Fragment>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
          component matching the name on the provided file.
          Pass it any props needed by the child component. */}
      {
        specialsData.map((special) => {
          return (<SpecialButton special={special} clickHandler={clickHandler} setDisplayValue={setDisplayValue} />);
        })
      }
    </React.Fragment>
  );
};

export default Specials;
