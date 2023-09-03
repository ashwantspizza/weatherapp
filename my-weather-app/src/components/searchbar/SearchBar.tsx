import React, {useEffect} from 'react';

interface SearchProps {
    buttonOnClick: (city: string) => void;
  }
  
const SearchBar: React.FC<SearchProps> = ({ buttonOnClick }) => {
    const [city, setCity] = React.useState<string>('');

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

      return (
        <div>
        </div>
      );
    };
    
    export default SearchBar;