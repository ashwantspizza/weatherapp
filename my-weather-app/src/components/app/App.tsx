import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from '../../components/searchbar/SearchBar';
import { getWeatherData } from '../../components/weatherdata/WeatherData';
import Display from '../../components/display/Display';

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
  const [cityChoice, setCityChoice] = useState<string>('London');

  useEffect(() => {
    document.title = "Ash's Weather App";
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(cityChoice);
      setWeather(data);
    };
    fetchWeatherData();
  }, [cityChoice]);

  console.log(weather);

  function updateCityChoice(city: string) {
    setCityChoice(city);
  }

  return (
    <div className="App">
      <SearchBar buttonOnClick={updateCityChoice} />
      {weather && <Display weather={weather} city={cityChoice} />}
    </div>
  );
};