import { useState } from 'react';
import { TiWeatherSunny } from 'react-icons/ti';
import Button from '../common/Button';
import Input from '../common/Input';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6" aria-label="Search weather by city">
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="flex-1"
        aria-label="City name input"
      />
      <Button type="submit" aria-label="Search weather">
        <TiWeatherSunny size={20} />
      </Button>
    </form>
  );
};

export default SearchBar;