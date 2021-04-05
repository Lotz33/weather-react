import React from "react";
import Table from "./Table";

export default function Weather() {
  return (
    <div className="card-group">
      <div className="card">
        <div className="card-body-left">
          <h5 className="card-title" id="city-name">
            xxx
          </h5>
          <br />
          <ul>
            <li>
              <span id="description"> </span>
            </li>
            <li>
              Highs of: <span id="high"> </span>°C
            </li>
            <li>
              Lows of: <span id="low"> </span>°C
            </li>
            <li>
              Humidity: <span id="humidity"> </span>%
            </li>
            <li>
              Wind speed: <span id="wind"> </span> km/h
            </li>
            <br />
            <li id="date-time">Date/Time</li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="card-body-right">
          <h2>
            <span className="card-title" id="degrees">
              18
            </span>
            <span id="units">
              <a href="#" id="celsius-link" className="active">
                ℃
              </a>{" "}
              |
              <a href="#" id="fahrenheit-link">
                ℉
              </a>
            </span>

            <img src="#" alt="" id="icon1" className="float-left" />
          </h2>
        </div>
      </div>
      <div className="card ms-3">
        <Table />
      </div>
    </div>
  );
}
