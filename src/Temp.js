import React from "react";

export default function Temp(props) {
  return (
    <div>
      <span className="card-title" id="degrees">
        {Math.round(props.celsius)}
      </span>
      <span id="units">
        <a href="#0" id="celsius-link" className="active">
          ℃
        </a>{" "}
        |
        <a href="#0" id="fahrenheit-link">
          ℉
        </a>
      </span>
    </div>
  );
}
