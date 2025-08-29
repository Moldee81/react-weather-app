import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
    });
  }
  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInfo data={WeatherData} />
      </div>
    );
  } else {
    const url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=6dod2fbfa8c43fe552ftae49bc36d90b`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
