import React from 'react';
// import './App.css';
import WeatherData from '../../components/weatherdata/WeatherData';
import SearchBar from '../../components/searchbar/SearchBar';

function App() {

  const handleSearch = (city: string) => {
    console.log(`Searching for city: ${city}`);
  };

  return (
    <div className="App">
      <SearchBar buttonOnClick={handleSearch}/>
      <WeatherData />
    </div>
  );
}

export default App;