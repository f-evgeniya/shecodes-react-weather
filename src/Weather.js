import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  const [temperature, setTemperature]=useState(null)
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "5ba04o3cadf5t843538c5f40f329e3dc";

  let city = "London";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  let weatherData = {
    city: "Kyiv",
    date: "Thursday, Dec 15",
    temperature: "0",
    description: "Light snow",
    wind: "1",
    humidity: "92",
    imgUrl:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/893/original/snow-day.png?1671099679",
    humidityUrl:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/949/original/humidity.png?1671121279",
    windUrl:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/950/original/wind.png?1671121283",
  };

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
            <img src={weatherData.imgUrl} alt="" />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units">°C</span>
          </div>
        </div>

        <div className="temperature-information">
          <div className="info">
            <p className="weather-descr">{weatherData.description}</p>
            <p className="wind">
              <img src={weatherData.windUrl} alt="wind" width="18px" /> Wind:
              <span>{weatherData.wind}</span> km/h
            </p>
            <p className="humidity">
              <img src={weatherData.humidityUrl} alt="humidity" width="18px" />
              Humidity: <span>{weatherData.humidity}</span>%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
