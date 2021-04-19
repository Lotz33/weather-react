import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Table(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  // console.log(props);
  let apiKey = "5a7957f3b705a03d6f7c072ce3f964e0";
  let lon = props.coord.lon;
  let lat = props.coord.lat;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(url).then(handleResponse);

  return (
    <div className="card-body">
      <h5 className="cardbody-question">Daily forecast:</h5>
      <table className="table" id="forecast">
        <tbody>
          <tr>
            <td>Day</td>
            <td>High | Low</td>
            <td>{""}</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>15°C | 14°C</td>
            <td>
              <WeatherIcon code="01d" size={20} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
