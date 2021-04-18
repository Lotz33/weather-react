import React from "react";
import FormattedDate from "./FormattedDate";
import Table from "./Table";

export default function WeatherInfo(props) {
  return (
    <div className="card-group">
      <div className="card">
        <div className="card-body-left">
          <h5 className="card-title" id="city-name">
            {props.data.city}
          </h5>
          <br />
          <ul className="text-capitalize">
            <li>Temperature: {Math.round(props.data.temperature)}°C</li>
            <li>Description: {props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind speed: {props.data.wind}km/h</li>
            <br />
            <li>
              <FormattedDate date={props.data.date} />
            </li>
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
              <a href="#0" id="celsius-link" className="active">
                ℃
              </a>{" "}
              |
              <a href="#0" id="fahrenheit-link">
                ℉
              </a>
            </span>

            <img src="#0" alt="" id="icon1" className="float-left" />
          </h2>
        </div>
      </div>
      <div className="card ms-3">
        <Table />
      </div>
    </div>
  );
}
