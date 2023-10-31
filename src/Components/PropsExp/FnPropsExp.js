import React from "react";
import PropTypes from "prop-types";

function FnPropsExp({ buttonText, inputText, paratext }) {
  // examples of props decompose
  return (
    <div>
      <input type="button" value={buttonText}></input>
      <input type="text" value={inputText}></input>
      <p>{paratext}</p> {/*exmpales of props decompose with default props */}
    </div>
  );
}

FnPropsExp.defaultProps = {
  buttonText: "Click Me Once!",
  inputText: "Plz pass the input",
  paratext: "no Text passed",
};

// to use propTypes need to run the command first npm install --save prop-types
// Also propTypes does not enforce the type but raise error in the console 
FnPropsExp.propTypes={
    buttonText:PropTypes.string,
    inputText:PropTypes.string,
    paratext:PropTypes.string
}

export default FnPropsExp;
