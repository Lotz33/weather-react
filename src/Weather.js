import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [weather, setWeather] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    // console.log(response);
    setWeather({
      ready: true,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      coord: response.data.coord,
    });
  }

  function submitSearch(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    // console.log(event.target.value);
    setCity(event.target.value);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a7957f3b705a03d6f7c072ce3f964e0&units=metric`;
    axios.get(url).then(showWeather);
  }

  function showLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "5a7957f3b705a03d6f7c072ce3f964e0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    // console.log(lat);
    // console.log(lon);

    axios.get(apiUrl).then(showWeather);
  }

  function showCoord(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showLocation);
  }

  if (weather.ready) {
    return (
      <div className="card-panel">
        <div className="row">
          <div className="col-6">
            <div className="cardbody-question" id="rain-question">
              Is it currently raining in {weather.city}?
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
              <button
                type="button"
                className="btn"
                id="location"
                onClick={showCoord}
              >
                <i className="fas fa-location-arrow"></i>
              </button>
              <p className="location">Use my location</p>
            </form>
          </div>
        </div>

        <hr />
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
