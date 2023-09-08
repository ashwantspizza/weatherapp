import React, {useState, useEffect} from 'react';
// import './App.css';
import SearchBar from '../../components/searchbar/SearchBar';
import WeatherData from '../../components/weatherdata/WeatherData';

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
        const data = await getWeatherData();
        setWeather(data);
      } catch (err: any) {
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
        <div>
          <WeatherData
              description={weather?.description || ''}
              temp={weather?.temp || 0}
              feels_like={weather?.feels_like || 0}
              temp_min={weather?.temp_min || 0}
              temp_max={weather?.temp_max || 0}
              pressure={weather?.pressure || 0}
              humidity={weather?.humidity || 0}
              speed={weather?.speed || 0}
              country={weather?.country || ''}
              name={weather?.name || ''} />
        </div>
      )}
      City: {cityChoice}
    </div>
  );
};