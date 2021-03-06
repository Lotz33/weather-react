import React from "react";
import FormattedDate from "./FormattedDate";
import Table from "./Table";
import WeatherIcon from "./WeatherIcon";
import Temp from "./Temp";

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
              <strong>Temperature:</strong> {Math.round(props.data.temp)}
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
          <Temp celsius={props.data.temp} />
          <h2>
            <WeatherIcon code={props.data.icon} size={100} />
          </h2>
        </div>
      </div>
      <div className="card ms-2">
        <Table coord={props.data.coord} />
      </div>
    </div>
  );
}
