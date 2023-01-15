import React, { useState } from "react";
import "./weatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
        <div className="row">
          <div className="col">
            <p className="weather-forecast-date">{forecast[0].time}</p>
            <img
              src={forecast[0].condition.icon_url}
              alt={props.data.description}
              width="60px"
            />
            <div className="weather-forecast-temperature">
              <span className="weather-forecast-temperature-max">
                {forecast[0].temperature.maximum}°
              </span>
              <span className="weather-forecast-temperature-min">
                {forecast[0].temperature.minimum}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5ba04o3cadf5t843538c5f40f329e3dc";
    let city = props.data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
