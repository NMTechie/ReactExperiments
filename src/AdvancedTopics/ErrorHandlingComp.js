import React, { Component } from "react";

class ErrorHandlingComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMsg: "",
    };
  }
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true, errorMsg: error.message };
  }
  render() {
    if (this.state.hasError) {
      return <h1> {this.state.errorMsg} ErrorHandling Component</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorHandlingComp;
