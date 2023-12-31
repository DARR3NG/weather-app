import React from "react";
import "./current-weather.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const CurrentWeather = ({ selectedPlace }) => {
  const { data } = useQuery({
    queryKey: ["Weather"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:8888/WEATHER-SERVICE/weather?address=${selectedPlace}`
      );
      const data = await response.data;
      console.log(data);
      return data;
    },
  });


  return (
    <>
      {data && (
        <div className="weather">
          <div className="header">
            <p className="city">{data.weather[0].address.split(",")[0]}</p>
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              className="weather-icon"
              alt="weather"
            />
          </div>
          <div className="main">
            <p className="temperature">{Math.floor(data.main.temp)}°C</p>
            <p className="weather-description">{data.weather[0].description}</p>
          </div>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">{Math.floor(data.main.feels_like)}°C</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
