import React from "react"; // This is for extending React.Components

class ClassPropsExp extends React.Component {
  constructor(props) { // do not use props decompose in class based mechanism
    super(props);
  }

  render() {
    return (
      <div>
        <h1>this is a component rendered through class</h1>
        <p>The name of the props {this.props.name} </p>
      </div>
    );
  }
}

export default ClassPropsExp;