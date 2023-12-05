import React from "react";
import CounterWithReducer from "./AdvancedTopics/ReducerExample/CounterWithReducer";
import CounterWithReducerComplex from "./AdvancedTopics/ReducerExample/CounterWithReducerComplex";

function AdvanceConceptApp01() {
  return (
    <div className="container">
      <div className="row">
        <CounterWithReducer/>
        <CounterWithReducerComplex/>
      </div>
    </div>
  );
}

export default AdvanceConceptApp01;
