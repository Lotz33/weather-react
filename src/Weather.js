import React, { useState } from "react";
import Table from "./Table";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function showWeather(response) {
    console.log(response);
    setWeather({
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function submitSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a7957f3b705a03d6f7c072ce3f964e0&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="card-panel">
      <div className="row">
        <div className="col-6">
          <div className="cardbody-question" id="rain-question">
            Is it currently raining in xxx?
          </div>
          <p className="card-text" id="rain-response"></p>
        </div>
        <div className="col-6">
          <form id="form-search" onSubmit={submitSearch}>
            <input
              type="search"
              onChange={updateCity}
              placeholder="Type a city.."
            />
            <input type="submit" value="Search" />

            <br />
            <button type="button" className="btn" id="location">
              <i className="fas fa-location-arrow"></i>
            </button>
            <p className="location">Use my location</p>
          </form>
        </div>
      </div>

      <hr />

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
              <li>Temperature: {Math.round(weather.temp)}°C</li>
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind speed: {weather.wind}km/h</li>
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
    </div>
  );
}
