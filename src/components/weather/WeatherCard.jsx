import { TiWeatherCloudy, TiWeatherStormy, TiWeatherSunny, TiWeatherSnow } from 'react-icons/ti';

const WeatherCard = ({ weather }) => {
  const getWeatherIcon = (weatherType) => {
    switch (weatherType.toLowerCase()) {
      case 'clear': return <TiWeatherSunny className="text-yellow-300 text-4xl" />;
      case 'clouds': return <TiWeatherCloudy className="text-gray-300 text-4xl" />;
      case 'rain': return <TiWeatherStormy className="text-blue-300 text-4xl" />;
      case 'snow': return <TiWeatherSnow className="text-white text-4xl" />;
      default: return <TiWeatherSunny className="text-yellow-300 text-4xl" />;
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-inner text-center space-y-3 border border-white/20">
      <h2 className="text-2xl font-bold text-white">{weather.name}, {weather.sys.country}</h2>
      <div className="flex justify-center mb-4">{getWeatherIcon(weather.weather[0].main)}</div>
      <p className="text-4xl font-semibold text-white">{Math.round(weather.main.temp)}°C</p>
      <p className="capitalize text-white/80">{weather.weather[0].description}</p>
      <div className="grid grid-cols-2 gap-4 text-sm text-white/90">
        <p className="flex items-center gap-2">
          <TiWeatherCloudy size={20} /> Temp: <span className="font-semibold">{weather.main.temp}°C</span>
        </p>
        <p className="flex items-center gap-2">
          <TiWeatherStormy size={20} /> Feels like: <span className="font-semibold">{weather.main.feels_like}°C</span>
        </p>
        <p className="flex items-center gap-2">
          <TiWeatherSunny size={20} /> Humidity: <span className="font-semibold">{weather.main.humidity}%</span>
        </p>
        <p className="flex items-center gap-2">
          <TiWeatherSnow size={20} /> Wind: <span className="font-semibold">{weather.wind.speed} m/s</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;