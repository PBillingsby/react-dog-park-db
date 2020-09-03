import React, { Component } from "react";
import DogParkForm from "./DogParkForm";
export default class DogParks extends Component {
  state = {
    parks: []
  };

  submitHandle = e => {
    e.preventDefault();
    let dogPark = {
      name: e.target.name.value,
      address: e.target.address.value,
      city: e.target.city.value,
      rating: e.target.rating.value,
      park_description: e.target.park_description.value
    };
    fetch("http://localhost:3001/dog_parks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dogPark)
    })
      .then(resp => resp.json())
      .then(park => console.log(park));
  };

  componentDidMount() {
    fetch("http://localhost:3001/dog_parks")
      .then(resp => resp.json())
      .then(parks => this.setState({ parks: parks }));
  }
  render() {
    return <DogParkForm submitHandle={e => this.submitHandle(e)} />;
  }
}
