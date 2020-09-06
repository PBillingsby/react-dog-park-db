import React from "react";

const DogPark = props => {
  return (
    <div className="card col m-2 w-25">
      <h1>{props.dp.name}</h1>
    </div>
  );
};

export default DogPark;
