import React, { Component } from "react";

export default class DogParkForm extends Component {
  render() {
    return (
      <form
        className="w-50 mx-auto"
        onSubmit={event => this.props.submitHandle(event)}
      >
        <div className="form-row">
          <div className="col">
            <label>Park Name </label>
            <input type="text" className="form-control" name="name"></input>
          </div>
          <div className="col-8">
            <label>Address </label>
            <input type="text" className="form-control" name="address"></input>
          </div>
          <div className="col-4">
            <label>City </label>
            <input type="text" className="form-control" name="city"></input>
          </div>

          <div className="col-6">
            <label>Description </label>
            <input
              type="text"
              className="form-control col"
              name="park_description"
            ></input>
          </div>
          <div className="col-2">
            <label>Rating </label>
            <input
              type="number"
              max="5"
              className="form-control col"
              name="rating"
            ></input>
          </div>
        </div>

        <button type="submit" className="mx-auto m-2">
          Submit
        </button>
      </form>
    );
  }
}
