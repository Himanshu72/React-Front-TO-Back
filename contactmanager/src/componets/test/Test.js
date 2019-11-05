import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    fetch("http://localhost:8000/get/contacts")
      .then(response => response.json())
      .then(json => console.log(json));
  }

  // componentWillMount() {
  //   console.log("Component Will mount");
  // }
  render() {
    return (
      <div>
        <h1>TEst</h1>
      </div>
    );
  }
}

export default Test;
