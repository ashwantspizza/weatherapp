import React, {useEffect} from 'react';

interface SearchProps {
    buttonOnClick: (city: string) => void;
  }
  
const SearchBar: React.FC<SearchProps> = ({ buttonOnClick }) => {
    const [city, setCity] = React.useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
      };

      return (
        <div>
        </div>
      );
    };
    
    export default SearchBar;