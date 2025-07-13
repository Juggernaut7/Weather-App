import { useState } from 'react';
import { toast } from 'react-toastify';

import { RECENT_SEARCHES_KEY } from '../utils/constants';
import { fetchForecastData, fetchWeatherByCoords, fetchWeatherData } from '../services/api';

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState(
    JSON.parse(localStorage.getItem(RECENT_SEARCHES_KEY)) || []
  );

  const saveSearch = (city) => {
    const formattedCity = city.trim().toLowerCase();
    if (!recentSearches.includes(formattedCity)) {
      const updatedSearches = [formattedCity, ...recentSearches.slice(0, 4)];
      setRecentSearches(updatedSearches);
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updatedSearches));
    }
  };

  const fetchWeather = async (city) => {
    if (!city.trim()) {
      toast.error('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchWeatherData(city),
        fetchForecastData(city),
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
      saveSearch(city);
      toast.success(`Weather data fetched for ${city}`);
    } catch (err) {
      setError('City not found or API error');
      console.error('Error fetching weather data:', err);

      toast.error('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const weatherData = await fetchWeatherByCoords(lat, lon);
      setWeather(weatherData);
      setForecast(null); // Optionally fetch forecast by coords
      toast.success(`Weather data fetched for your location`);
    } catch (err) {
      setError('Failed to fetch weather for location');
        console.error('Error fetching weather by coordinates:', err);
      toast.error('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return { weather, forecast, loading, error, fetchWeather, fetchWeatherByCoords, recentSearches };
};

export default useWeather;