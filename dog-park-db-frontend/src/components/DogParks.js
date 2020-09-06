import React, { Component } from "react";
import DogParkForm from "./DogParkForm";
import DogPark from "./DogPark";
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

  fetchDogParks() {
    fetch("http://localhost:3001/dog_parks")
      .then(resp => resp.json())
      .then(dogParks => this.setState({ parks: dogParks }));
  }

  componentDidMount() {
    this.fetchDogParks();
  }

  componentDidUpdate() {
    return this.state.parks.map(dp => <DogPark dp={dp} />);
  }
  render() {
    return (
      <>
        <select>
          {this.state.parks.map(dp => (
            <option key={dp.id} value={dp.city}>
              {dp.city}
            </option>
          ))}
        </select>
        <div className="row">
          {this.state.parks.map(dp => (
            <DogPark key={dp.id} dp={dp} />
          ))}
        </div>
        <DogParkForm submitHandle={e => this.submitHandle(e)} />
      </>
    );
  }
}
