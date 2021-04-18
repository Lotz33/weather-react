import React, { useState } from "react";

export default function Temp(props) {
  const [unit, setUnit] = useState("celsius");
  function showF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="card-title" id="degrees">
          {Math.round(props.celsius)}
        </span>
        <span className="unit">
          ℃ |
          <a href="/" onClick={showF}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="card-title" id="degrees">
          {Math.round(fahrenheit)}
        </span>
        <span className="unit">
          <a href="/" onClick={showC}>
            ℃{" "}
          </a>
          | ℉
        </span>
      </div>
    );
  }
}
