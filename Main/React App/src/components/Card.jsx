import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col">
            <h1>{props.name}</h1>
            <p>{props.phone}</p>
            <p>{props.email}</p>
          </div>
          <div className="col">
            <img
              src={props.img}
              alt="hollow"
              width="200px"
              height="200px"
              className="cardImg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
