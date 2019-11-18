import React from "react";

const Display = (props) => {
  return (
    <div className="display">
      {/* Display any props data here */}
      <span className="display-text">{ props.value }</span>
    </div>
  );
};

export default Display;
