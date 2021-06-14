import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  return (
    <div>
      <h1 className="city">Chicago</h1>
      <ul>
        <li className="description">Sunny</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <div className="float-left">
            <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="goldenrod"
                size={50}
                animate={true}
            />
              <strong>10</strong>
              <small className="units">
                <a href="#" className="active">
                  °C
                </a>{" "}
                |
                <a href="#" className="inactive">
                  °F
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>💦 Humidity: 60%</li>
            <li>🍃 Wind: 2 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}