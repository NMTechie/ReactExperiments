import React from "react";
import { useState } from "react";

function MouseHoverCounter() {
  const [counter, setCounter] = useState(0);
  const HoverHandler = (e) => {
    console.log(e.target.value);
    let currCounter = counter;
    currCounter = currCounter + 1;
    setCounter(currCounter);
  };
  return (
    <div>
      <h4
        onMouseOver={(e) => HoverHandler(e)}
      >{`Hover here to increase the counter. Counter value is ${counter}`}</h4>
    </div>
  );
}

export default MouseHoverCounter;
