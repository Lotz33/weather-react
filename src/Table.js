import React from "react";

export default function Table() {
  return (
    <div className="card-body">
      <h5 className="cardbody-question">Hourly forecast:</h5>
      <table className="table" id="forecast">
        <tbody>
          <tr>
            <td>Time</td>
            <td>High | Low</td>
            <td>
              <img
                src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
                alt=""
                id="icon2"
                className="float-right"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
