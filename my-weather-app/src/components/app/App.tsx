import React, {useState, useEffect} from 'react';
// import './App.css';
import getWeatherData from '../../components/weatherdata/WeatherData';
import SearchBar from '../../components/searchbar/SearchBar';
import WeatherData from '../../components/weatherdata/WeatherData';

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

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
      setLoading(true);
      setError(null);

      try {
        const data = await getWeatherData(cityChoice);
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, [cityChoice]);

  function updateCityChoice(city: string) {
    setCityChoice(city);
  }

  console.log(weather);

  return (
    <div className="App">
      <SearchBar buttonOnClick={updateCityChoice} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <WeatherData
          description={weather?.description || ''}
          temp={weather?.temp || 0}
          // ... (other weather properties)
        />
      )}
      City: {cityChoice}
    </div>
  );
};