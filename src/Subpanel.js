import React from "react";

export default function Subpanel() {
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
          <form id="form-search">
            <input
              type="search"
              className="form-control"
              id="search-input"
              placeholder="Search for a city..."
              autoComplete="off"
            />
            <input type="submit" value="Search" /> <br />
            <button type="button" className="btn mt-2" id="location">
              <i className="fas fa-location-arrow"></i>
            </button>
            <p className="location">Use my location</p>
          </form>
        </div>
      </div>
    </div>
  );
}
