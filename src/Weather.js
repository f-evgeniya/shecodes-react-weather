import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Thursday, Dec 15",
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      imgUrl: response.data.condition.icon_url,
      humidityUrl:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/949/original/humidity.png?1671121279",
      windUrl:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/950/original/wind.png?1671121283",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="searh-form-container"></div>
        <form className="search-form">
          <input
            type="search"
            value=""
            placeholder="Enter a city"
            className="search-input"
            autocomplete="off"
          />
          <button className="search-btn">Search</button>
        </form>

        <div className="weather-information">
          <div className="city-information">
            <p className="date">{weatherData.date}</p>
            <h1 className="city">{weatherData.city}</h1>
            <div className="img-temp-card">
              <img src={weatherData.imgUrl} alt={weatherData.description} />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">°C</span>
            </div>
          </div>

          <div className="temperature-information">
            <div className="info">
              <p className="weather-descr text-capitalize">
                {weatherData.description}
              </p>
              <p className="wind">
                <img src={weatherData.windUrl} alt="wind" width="18px" /> Wind:
                <span>{Math.round(weatherData.wind)}</span> km/h
              </p>
              <p className="humidity">
                <img
                  src={weatherData.humidityUrl}
                  alt="humidity"
                  width="18px"
                />
                Humidity: <span>{weatherData.humidity}</span>%
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5ba04o3cadf5t843538c5f40f329e3dc";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
