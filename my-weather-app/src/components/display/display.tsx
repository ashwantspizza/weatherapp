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
      <h3 className ="container_title">{`${weather.name}, ${weather.country}`}</h3> 
                <small>
      <p className="temp-container">{Math.round(weather.temp - 273.15)}°C</p>
      <p className="container_description">{weather.description}</p>
    <div className="container_desc">
      <p className="container_desc-feels">Feels like: {Math.round(weather.feels_like - 273.15)}°C</p>
    </div>
    <div className="container_desc">
      <p className="container_desc-min">Min temp: {Math.round(weather.temp_min - 273.15)}°C</p>
    </div>
    <div className="container_desc">
     <p className= "container_desc-max" >Max temp: {Math.round(weather.temp_max - 273.15)}°C</p>
     </div>
     <div className="container_desc">
      <p className="container_desc-speed">Wind Speed: {weather.speed}m/s</p>
    </div>
    <div className="container_desc">
      <p className="container_desc-pressure">Pressure: {weather.pressure}hPa</p> 
    </div>
    <div className="container_desc">
      <p className ="container_desc-humidity">Humidity: {weather.humidity}%</p>
    </div>
    </small>
    </div>;
  };
  
  export default Display;