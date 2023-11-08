import React from "react";
import { useEffect } from "react";

function FragMemo(props) {
    useEffect(() => {
        console.log(props.fromParent);
        }, [props.fromParent]);
  return (
    <React.Fragment>
      <h1> It is a demo Showing concept of Fragment and Memo Component </h1>
      <h2>
        {" "}
        Wrap multiple element inside React.Fragment to pass multiple element
        without wrapping inside a parent html element{" "}
      </h2>
      <p>{props.fromParent}</p>
    </React.Fragment>
  );
}

export default React.memo(FragMemo);
