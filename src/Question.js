import React from "react";

export default function Question(props) {
  if (props.data.weather === "Rain") {
    return (
      <div>
        <div className="cardbody-question" id="rain-question">
          Is it currently raining in {props.data.city}?
        </div>
        <span className="card-text" id="rain-response">
          <strong>Yes</strong>, take a brolly!
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <div className="cardbody-question" id="rain-question">
          Is it currently raining in {props.data.city}?
        </div>
        <span className="card-text" id="rain-response">
          <strong>Not at the moment</strong>, <br />
          but check the forecast.
        </span>
      </div>
    );
  }
}
