import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <table className="table" id="forecast">
      <tbody>
        <tr>
          <td>Day</td>
          <td>High | Low</td>
          <td>{""}</td>
        </tr>
        <tr>
          <td>{day()}</td>
          <td>
            {Math.round(props.data.temp.max)}° |{" "}
            {Math.round(props.data.temp.min)}°
          </td>
          <td>
            <WeatherIcon code={props.data.weather[0].icon} size={20} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
