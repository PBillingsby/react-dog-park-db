import React, { Component } from "react";

class FormHandle extends Component {
  componentDidMount() {
    fetch("http://localhost:3001/dog_parks", {
      method: "POST",
      body: JSON.stringify(this.props),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(resp => resp.json().then(dp => console.log(dp)));
  }

  render() {
    return <div></div>;
  }
}

export default FormHandle;
