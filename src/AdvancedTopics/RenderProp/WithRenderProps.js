import React from "react";
import { useState } from "react";

function WithRenderProps(props) {
  const [counter, setCounter] = useState(0);
  const incrementCounterLogic = (e) => {
    let currCounter = counter;
    currCounter = currCounter + 1;
    setCounter(currCounter);
  };
  return (
  <div>{props.MyCustomFuncAsProp(counter,incrementCounterLogic)}</div>
  );
}

export default WithRenderProps;
