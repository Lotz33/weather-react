import React, { useState } from "react";
import axios from "axios";

export default function Subpanel() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function showWeather(response) {
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
        <div className="col-8">
          <div className="cardbody-question" id="rain-question">
            Is it currently raining in xxx?
          </div>
          <p className="card-text" id="rain-response"></p>
        </div>
        <div className="col-4">
          <form id="form-search" onSubmit={submitSearch}>
            <input
              type="search"
              onChange={updateCity}
              placeholder="Type a city.."
            />
            <input type="submit" value="Search" />
            <button type="button" className="btn mt-2" id="location">
              <i className="fas fa-location-arrow"></i>
            </button>
            <p className="location">Use my location</p>
          </form>
          <p>Temperature: {Math.round(weather.temp)}°C</p>
          <p>Description: {weather.description}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind: {weather.wind}km/h</p>
        </div>
      </div>
    </div>
  );
}
