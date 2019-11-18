import React, { useState } from "react";
import "./App.css";

// STEP 0 - import data once here instead of thrice within below components for efficiency.
import Data from "./data";

// STEP 4 - import the button and display components
import Display from "./components/DisplayComponents/Display";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should receive 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [displayValue, setDisplayValue] = useState(0);

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <div>
          <Display value={displayValue} />
        </div>
        <div>
          <div className="group">
            <div className="group group-left">
              <div className="group group-specials">
                <Specials clickHandler={clickHandler} specials={Data.specials} setDisplayValue={setDisplayValue} />
              </div>
              <div className="group group-numbers">
                <Numbers clickHandler={clickHandler} numbers={Data.numbers} setNumberState={setNumberState} setDisplayValue={setDisplayValue} />
              </div>
            </div>
            <div className="group group-right">
              <Operators clickHandler={clickHandler} operators={Data.operators} setDisplayValue={setDisplayValue} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function setNumberState(props) {
    setDisplayValue(props.input);
  }

  function clickHandler(input) {
    //Prevent Default event to avoid logging to console on init.
    console.log(input);
    switch (input) {
      case "0":
        console.log('zero');
        break;
      case "1":
        break;
      case "2":
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;
      case "7":
        break;
      case "8":
        break;
      case "9":
        break;
      case ".":
        break;
      case "/":
        break;
      case "x":
        break;
      case "-":
        break;
      case "+":
        break;
      case "=":
        break;
      case "C":
        break;
      case "+/-":
        break;
      case "%":
        break;
      default:
        // alert("Invalid input!");
    }
    setNumberState(input);
  }
}

export default App;
