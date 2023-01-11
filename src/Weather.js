import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherDailyForecast from "./WeatherDailyForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
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

  function search() {
    const apiKey = "5ba04o3cadf5t843538c5f40f329e3dc";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="searh-form-container"></div>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            className="search-input"
            autoComplete="off"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="search-btn" />
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherDailyForecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
