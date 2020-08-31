import React, { Component } from "react";
import DogPark from "./DogPark";
export default class DogParkButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      parks: []
    };
  }
  fetchParks = () => {
    this.setState({ isClicked: true });
    fetch("http://localhost:3001/dog_parks").then(resp =>
      resp
        .json()
        .then(returnedParks =>
          this.setState({ parks: [...this.state.parks, returnedParks] })
        )
    );
    console.log(this.state.parks);
  };
  render() {
    return (
      <button onClick={() => this.fetchParks(this)}>Find Dog Parks</button>
    );
  }
}
