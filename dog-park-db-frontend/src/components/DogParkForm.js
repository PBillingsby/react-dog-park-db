import React, { Component } from "react";
import FormHandle from "./FormHandle";
export default class DogParkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogParkName: "",
      address: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    return <FormHandle props={this.state} />;
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="dp-form">
        <h4 className="text-center">Add Dog Park</h4>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="dogParkName"
              value={this.state.dogParkName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
