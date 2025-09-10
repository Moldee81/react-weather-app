export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <div className="Forecast-icon">
        {" "}
        <img src={props.data.condition.icon_url} alt={props.data.icon}></img>
      </div>
      <div className="Forecast-temperatures">
        <span className="Forecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="Forecast-temperature-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
