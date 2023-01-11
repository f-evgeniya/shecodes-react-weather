import React from "react";
import "./weatherDailyForecast.css"

export default function WeatherDailyForecast(props){
    return (
      <div className="weather-forecast">
        <div className="row">
          <div className="col">
            <p className="weather-forecast-date">Thu</p>
            <img src={props.data.imgUrl} alt={props.data.description} width="60px" />
            <div className="weather-forecast-temperature">
              <span className="weather-forecast-temperature-max">9°</span>
              <span className="weather-forecast-temperature-min">3°</span>
            </div>
          </div>

          
        </div>
      </div>
    );
}