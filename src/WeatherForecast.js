import React from "react";
import "./weatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  const apiKey = "5ba04o3cadf5t843538c5f40f329e3dc";
  let city = props.data.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <p className="weather-forecast-date">Thu</p>
          <img
            src={props.data.imgUrl}
            alt={props.data.description}
            width="60px"
          />
          <div className="weather-forecast-temperature">
            <span className="weather-forecast-temperature-max">9°</span>
            <span className="weather-forecast-temperature-min">3°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
