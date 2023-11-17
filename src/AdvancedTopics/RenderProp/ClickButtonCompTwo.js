import React from "react";

function ClickButtonCompTwo(props) {
  return (
    <div>
      <input
        type="button"
        value={`Button has been clicked ${props.CounterValue} times`}
        onClick={props.ClickHandler}
      />
    </div>
  );
}

export default ClickButtonCompTwo
