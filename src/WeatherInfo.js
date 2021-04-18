import React from "react";
import FormattedDate from "./FormattedDate";
import Table from "./Table";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="card-group">
      <div className="card">
        <div className="card-body-left">
          <h5 className="card-title" id="city-name">
            {props.data.city}
          </h5>

          <ul>
            <li>
              <strong>Temperature:</strong> {Math.round(props.data.temperature)}
              °C
            </li>
            <li className="text-capitalize">
              <strong>Description:</strong> <br />
              {props.data.description}
            </li>
            <li>
              <strong>Humidity:</strong> {props.data.humidity}%
            </li>
            <li>
              <strong>Wind speed:</strong> {props.data.wind}km/h
            </li>
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
            <br /> <br />
            <WeatherIcon code={props.data.icon} />
          </h2>
        </div>
      </div>
      <div className="card ms-3">
        <Table />
      </div>
    </div>
  );
}
