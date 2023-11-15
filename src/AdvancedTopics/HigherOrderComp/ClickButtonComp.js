import React from "react";
import updatedComponent from "./WithCounterHOC";

function ClickButtonComp(props) {  

  return (
    <div>
      <input
        type="button"
        value={`Button has been clicked ${props.counterValue} times supplied HOC value is ${props.name}`}
        onClick={props.triggerCounter}
      />
    </div>
  );
}

export default updatedComponent(ClickButtonComp);
