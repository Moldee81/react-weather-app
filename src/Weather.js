import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

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
      icon: response.data.condition.description.icon,
      iconUrl: response.data.condition.description.icon_url,
      city: response.data.city,
      date: response.data.time,
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
        <h1>{WeatherData.city}</h1>
        <ul>
          <li>{WeatherData.date}</li>
          <li>{WeatherData.condition}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={WeatherData.iconUrl} alt={WeatherData.icon}></img>
            <span className="temperature">
              {" "}
              {Math.round(WeatherData.temperature)}
            </span>{" "}
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {WeatherData.humidity}%</li>
              <li>Wind: {WeatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=6dod2fbfa8c43fe552ftae49bc36d90b`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
