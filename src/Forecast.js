import React from "react";
import WeatherInfo from "./WeatherInfo";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Mon</div>
          <div className="Forecast-icon">☀️</div>
          <div className="Forecast-temperatures">
            <span className="Forecast-temperature-max">19°</span>
            <span className="Forecast-temperature-min">14°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
