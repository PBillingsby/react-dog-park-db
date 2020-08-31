import React, { Component } from "react";

class FormHandle extends Component {
  componentDidMount() {
    let body = {
      name: this.props.dogPark.dogParkName,
      address: this.props.dogPark.address
    };
    fetch("http://localhost:3001/dog_parks", {
      method: "POST",
      body: JSON.stringify(body),
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
