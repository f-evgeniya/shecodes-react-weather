import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-information">
        <div className="city-information">
          <p className="date">
            <FormattedDate date={props.data.date} />
          </p>
          <h1 className="city">{props.data.city}</h1>
          <div className="img-temp-card">
            <img src={props.data.imgUrl} alt={props.data.description} width="100" height="100"/>
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units">°C</span>
          </div>
        </div>

        <div className="temperature-information">
          <div className="info">
            <p className="weather-descr text-capitalize">
              {props.data.description}
            </p>
            <p className="wind">
              <img src={props.data.windUrl} alt="wind" width="18px" /> Wind:
              <span>{Math.round(props.data.wind)}</span> km/h
            </p>
            <p className="humidity">
              <img src={props.data.humidityUrl} alt="humidity" width="18px" />
              Humidity: <span>{props.data.humidity}</span>%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
