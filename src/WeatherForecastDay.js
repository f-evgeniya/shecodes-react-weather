import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperatre = Math.round(props.data.temperature.maximum);
    return `${temperatre}°`;
  }
  function minTemperature() {
    let temperatre = Math.round(props.data.temperature.minimum);
    return `${temperatre}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];
    return days[day];
  }

  return (
    <div>
      <p className="weather-forecast-date">{day()}</p>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.description}
        width="60px"
      />
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weather-forecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
