import React from "react";
import { useState } from "react";

const updatedComponent = (OriginalComponent,counterIncrementedBy) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(0);
    const clickHandler = (e) => {
      console.log(e.target.value);
      let currCounter = counter;
      currCounter = currCounter + counterIncrementedBy;
      setCounter(currCounter);
    };
    console.log(props.passingValueToHoc);
    return (
      <OriginalComponent
        name="Newly added feature"
        counterValue={counter}
        triggerCounter={clickHandler}
        {...props}
      />
    );
  }
  return NewComponent;
};

export default updatedComponent;
