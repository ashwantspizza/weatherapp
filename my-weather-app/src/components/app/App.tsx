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
  iconURL: string;
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

  return (
    <div className="App">
      <SearchBar buttonOnClick={handleSearch}/>
    </div>
  );
};