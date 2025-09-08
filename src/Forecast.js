import React from "react";
import "./Forecast.css";
import Axios from "axios";

export default function Forecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let city = "Poznan";
  const url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=6dod2fbfa8c43fe552ftae49bc36d90b`;
  Axios.get(url).then(handleResponse);
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
