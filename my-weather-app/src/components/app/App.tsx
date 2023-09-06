import React, {useState, useEffect} from 'react';
// import './App.css';
import { getWeatherData } from '/Users/aisling/Documents/projects/weather-app/weatherapp/my-weather-app/src/components/weatherdata/WeatherData';
import SearchBar from '../../components/searchbar/SearchBar';

interface WeatherDataProps {
  description: string;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  temp: number;
  pressure: number;
  humidity: number;
  speed: number;
  country: string;
  name: string;
}

export default function App() {

  const [weather, setWeather] = useState<WeatherDataProps | null>(null);
  const [cityChoice, setCityChoice] = useState<string>('');

  useEffect(() => {
    document.title = "Ash's Weather App";
  }, []);

  const handleSearch = (city: string) => {
    console.log(`Searching for city: ${city}`);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(cityChoice);
      setWeather(data);
    };
    fetchWeatherData();
  }, [cityChoice]);

  function updateCityChoice(city: string) {
    setCityChoice(city);
  }

  console.log(weather);

  return (
    <div className="App">
      <SearchBar buttonOnClick={handleSearch}/>
    </div>
  );
};