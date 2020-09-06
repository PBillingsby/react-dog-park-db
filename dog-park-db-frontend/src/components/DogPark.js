import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const DogPark = props => {
  let starsArr = [];
  for (let i = 0; i < props.dp.rating; i++) {
    starsArr.push(<FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />);
  }
  return (
    <div className="card col m-2 w-25">
      <h1>{props.dp.name}</h1>
      <p>{props.dp.city}</p>
      <span>{starsArr}</span>
    </div>
  );
};

export default DogPark;
