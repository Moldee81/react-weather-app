import React, { useState } from "react";
import "./Forecast.css";
import Axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast() {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(false);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    const url = `https://api.shecodes.io/weather/v1/forecast?query="Poznan"&key=6dod2fbfa8c43fe552ftae49bc36d90b`;
    Axios.get(url).then(handleResponse);
    return null;
  }
}
