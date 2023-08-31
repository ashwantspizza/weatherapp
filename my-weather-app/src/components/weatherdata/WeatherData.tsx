import React, { useState, useEffect } from 'react';

const WeatherComponent: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null); // replace any w other types if needed

  useEffect(() => {
    const apiKey = 'eb58f7958543d47270277234019d256e';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=city_name&appid=${apiKey}`;
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
