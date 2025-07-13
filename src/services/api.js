import axios from 'axios';
import { API_URL, FORECAST_API_URL, API_KEY } from '../utils/constants';

export const fetchWeatherData = async (city) => {
  const response = await axios.get(API_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};

export const fetchWeatherByCoords = async (lat, lon) => {
  const response = await axios.get(API_URL, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};

export const fetchForecastData = async (city) => {
  const response = await axios.get(FORECAST_API_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};