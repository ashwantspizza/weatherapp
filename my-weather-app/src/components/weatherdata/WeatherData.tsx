import React, { useState, useEffect } from 'react';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
} // interface for weatherdata

const WeatherComponent: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null); // weatherdata is null until fetch is successful

  useEffect(() => {
    const apiKey = 'eb58f7958543d47270277234019d256e';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}`;

    console.log('fetching weather data..'); // fetch being attempted
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('fetched weather data:', data);
        setWeatherData(data);
      })
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