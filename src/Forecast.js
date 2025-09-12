import React, { useEffect, useState } from "react";
import "./Forecast.css";
import Axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
    let city = props.city;
    const url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=6dod2fbfa8c43fe552ftae49bc36d90b`;
    Axios.get(url)
      .then(handleResponse)
      .catch((error) => {
        console.error("Error fetching weather data: ", error);
        setLoaded(true); // Set loaded to true even if there's an error
      });
  }, [props.city]);

  function handleResponse(response) {
    console.log(response); // Log the response for debugging
    if (response.data && Array.isArray(response.data.daily)) {
      setForecast(response.data.daily); // Set forecast data
    } else {
      console.error("Unexpected data structure", response.data);
      setForecast([]); // Ensure forecast is set to an empty array in case of unexpected data
    }
    setLoaded(true); // Data has been loaded
  }

  // Show loading message until data is loaded
  if (!loaded) {
    return <div>Loading...</div>;
  }

  // Render the forecast data
  console.log(forecast); // Log the forecast for debugging
  return (
    <div className="Forecast">
      <div className="row">
        {forecast.slice(0, 4).map((dailyForecast, index) => (
          <div className="col" key={index}>
            <ForecastDay data={dailyForecast} />
          </div>
        ))}
      </div>
    </div>
  );
}
