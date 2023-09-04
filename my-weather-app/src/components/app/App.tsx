import React from 'react';
// import './App.css';
import WeatherData from '../../components/weatherdata/WeatherData';
import SearchBar from '../../components/searchbar/SearchBar';

function App() {
  return (
    <div className="App">
      <WeatherData />
      <SearchBar />
    </div>
  );
}

export default App;
