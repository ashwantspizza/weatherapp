import React, {useState} from 'react';
import './SearchBar.css';

interface SearchProps {
    buttonOnClick: (city: string) => void;
  }
  
const SearchBar: React.FC<SearchProps> = ({ buttonOnClick }) => {
    const [city, setCity] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
      };

    const handleButtonClick = () => {
    buttonOnClick(city);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // when "enter" key pressed, trigger the search
      buttonOnClick(city);
    }
  };

      return ( <>
        <h1 className='type-city-prompt'>Type in a city!</h1>
        <div className='search'>
          <input type="text" className="textbox" value={city} onChange={handleInputChange} onKeyDown={handleInputKeyDown} />
          <div className='button-container'>
            <button className="button" onClick={handleButtonClick}>Search</button>
          </div>
        </div>
        </>
      );
    };
    
    export default SearchBar;