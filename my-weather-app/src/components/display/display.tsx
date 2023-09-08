import React from 'react';

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
      <h3 className ="container__title">{`${weather.name}, ${weather.country}`}</h3> 
                <small>
      <p className="container__desc-temp">{weather.temp}°C</p>
      <p className="container__description">{weather.description}</p>
    <div className="container__desc">
      <p className="container__desc-feels">Feels like: {weather.feels_like}°C</p>
    </div>
    <div className="container__desc">
      <p className="container__desc-min">Min temp: {weather.temp_min}°C</p>
    </div>
    <div className="container__desc">
     <p className= "container__desc-max" >Max temp: {weather.temp_max}°C</p>
     </div>
     <div className="container__desc">
      <p className="container__desc-speed">Wind Speed: {weather.speed}m/s</p>
    </div>
    <div className="container__desc">
      <p className="container__desc-pressure">Pressure: {weather.pressure}hPa</p> 
    </div>
    <div className="container__desc">
      <p className ="container__desc-humidity">Humidity: {weather.humidity}%</p>
    </div>
    </small>
    </div>;
  };
  
  export default Display;