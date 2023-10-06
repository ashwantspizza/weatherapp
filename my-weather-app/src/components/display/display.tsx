import React from 'react';
import './Display.css';

interface DisplayProps {
    weather: { temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      iconURL: string;
      speed: number;
      country: string;
      name: string;
  }, city: string;
  }

  const Display: React.FC<DisplayProps> = ({ weather, city }) => {
    return <div className ="container">

      <h3 className ="city-title-container">{`${weather.name}, ${weather.country}`}</h3>
      <img
                src={weather.iconURL} 
                alt="Weather Icon"
              />
      <p className="temp-container">{Math.round(weather.temp - 273.15)}°C</p>

    <div className="desc-container"> <strong>Feels like:</strong> {Math.round(weather.feels_like - 273.15)}°C </div>
    <div className="desc-container"><strong>Min temp:</strong> {Math.round(weather.temp_min - 273.15)}°C </div>
    <div className="desc-container"> <strong>Max temp:</strong> {Math.round(weather.temp_max - 273.15)}°C </div>
    <div className="desc-container"> <strong>Wind Speed:</strong> {weather.speed}m/s </div>
    <div className="desc-container"> <strong>Pressure:</strong> {weather.pressure}hPa </div>
    <div className="desc-container"> <strong>Humidity:</strong> {weather.humidity}% </div>

    </div>;
  };
  
  export default Display;