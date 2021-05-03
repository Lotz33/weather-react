import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Table(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  // console.log(props);

  if (loaded) {
    return (
      <div className="card-body">
        <h5 className="cardbody-question">Daily forecast:</h5>
        <table className="table" id="forecast">
          <tbody>
            {forecast.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div key={index}>
                    <ForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    let apiKey = "5a7957f3b705a03d6f7c072ce3f964e0";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);
    return null;
  }
}
