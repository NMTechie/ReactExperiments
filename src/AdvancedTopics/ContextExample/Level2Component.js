import React from "react";
import { MyCustomContextConsumer } from "./ContextExample";

function Level2Component() {
  return (
    <MyCustomContextConsumer>
      {(valueFromContext) => {
        return (
          <div>{`The value from MyCustomContext is ${valueFromContext}`}</div>
        );
      }}
    </MyCustomContextConsumer>
  );
}

export default Level2Component;
