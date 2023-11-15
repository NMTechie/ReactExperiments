import React from "react";
import { useState } from "react";

const updatedComponent = (OriginalComponent) => {
  function NewComponent() {
    const [counter, setCounter] = useState(0);
    const clickHandler = (e) => {
      console.log(e.target.value);
      let currCounter = counter;
      currCounter = currCounter + 1;
      setCounter(currCounter);
    };
    return <OriginalComponent name="Newly added feature" counterValue={counter} triggerCounter={clickHandler}/>;
  }
  return NewComponent;
};

export default updatedComponent;
