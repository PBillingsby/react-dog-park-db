import React, { Component } from "react";

export default class DogParkForm extends Component {
  render() {
    return (
      <form
        className="w-25 mx-auto"
        onSubmit={event => this.props.submitHandle(event)}
      >
        <div className="form-group">
          <label>Park Name </label>
          <input type="text" className="form-control" name="name"></input>
        </div>
        <div className="form-group">
          <label>Address </label>
          <input type="text" className="form-control" name="address"></input>
        </div>
        <div className="form-group">
          <label>City </label>
          <input type="text" className="form-control" name="city"></input>
        </div>
        <div className="form-group">
          <label>Rating </label>
          <input
            type="number"
            max="5"
            className="form-control"
            name="rating"
          ></input>
        </div>
        <div className="form-group">
          <label>Description </label>
          <input
            type="text"
            className="form-control"
            name="park_description"
          ></input>
        </div>
        <input type="submit"></input>
      </form>
    );
  }
}
