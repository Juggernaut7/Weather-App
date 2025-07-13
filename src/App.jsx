import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SearchBar from './components/weather/SearchBar';
import WeatherCard from './components/weather/WeatherCard';
import ForecastCard from './components/weather/ForecastCard';
import RecentSearches from './components/weather/RecentSearches';
import WeatherMap from './components/weather/WeatherMap';
import Loader from './components/common/Loader';
import Button from './components/common/Button';
import useWeather from './hooks/useWeather';
import useGeolocation from './hooks/useGeolocation';
import './index.css';

function App() {
  const { weather, forecast, loading, error, fetchWeather, fetchWeatherByCoords, recentSearches } = useWeather();
  const { coords, error: geoError } = useGeolocation();
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (coords) {
      fetchWeatherByCoords(coords.lat, coords.lon);
    }
  }, [coords, fetchWeatherByCoords]);

  const handleSearch = (city) => {
    fetchWeather(city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 to-teal-500 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-white">
          <p className="text-center text-gray-100 mb-6">
            Get real-time weather updates, 5-day forecasts, and interactive maps for any city.
          </p>
          <SearchBar onSearch={handleSearch} />
          <RecentSearches searches={recentSearches} onSearch={handleSearch} />
          {loading && <Loader />}
          {error && <p className="text-orange-500 text-sm text-center mb-4">{error}</p>}
          {geoError && <p className="text-orange-500 text-sm text-center mb-4">{geoError}</p>}
          {weather && <WeatherCard weather={weather} />}
          {forecast && <ForecastCard forecast={forecast} />}
          {weather && (
            <div className="mt-6">
              <Button onClick={() => setShowMap(!showMap)} className="w-full">
                {showMap ? 'Hide Map' : 'Show Weather Map'}
              </Button>
              {showMap && <WeatherMap lat={weather.coord.lat} lon={weather.coord.lon} />}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;