import React from 'react';
import './Display.css';

interface DisplayProps {
    weather: { temp: number;
      description: string;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      speed: number;
      country: string;
      name: string;
  }, city: string;
  }

  const Display: React.FC<DisplayProps> = ({ weather, city }) => {
    return <div className ="container">
      <h3 className ="title-container">{`${weather.name}, ${weather.country}`}</h3> 
      <p className="temp-container">{Math.round(weather.temp - 273.15)}°C</p>
      <p className="weather-description">{weather.description}</p>
      <small>
    <div className="desc-container"> <strong>Feels like:</strong> {Math.round(weather.feels_like - 273.15)}°C
    </div>
    <div className="desc-container"><strong>Min temp:</strong> {Math.round(weather.temp_min - 273.15)}°C
    </div>
    <div className="desc-container"> <strong>Max temp:</strong> {Math.round(weather.temp_max - 273.15)}°C
     </div>
     <div className="desc-container"> <strong>Wind Speed:</strong> {weather.speed}m/s
    </div>
    <div className="desc-container"> <strong>Pressure:</strong> {weather.pressure}hPa
    </div>
    <div className="desc-container"> <strong>Humidity:</strong> {weather.humidity}%
    </div>
    </small>
    </div>;
  };
  
  export default Display;