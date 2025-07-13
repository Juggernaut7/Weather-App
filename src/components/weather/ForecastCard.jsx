import { TiWeatherCloudy, TiWeatherStormy, TiWeatherSunny, TiWeatherSnow } from 'react-icons/ti';
import { format } from 'date-fns';

const ForecastCard = ({ forecast }) => {
  const dailyData = forecast.list.filter((_, index) => index % 8 === 0).slice(0, 5); // Get one per day

  const getWeatherIcon = (weatherType) => {
    switch (weatherType.toLowerCase()) {
      case 'clear': return <TiWeatherSunny className="text-yellow-300 text-2xl" />;
      case 'clouds': return <TiWeatherCloudy className="text-gray-300 text-2xl" />;
      case 'rain': return <TiWeatherStormy className="text-blue-300 text-2xl" />;
      case 'snow': return <TiWeatherSnow className="text-white text-2xl" />;
      default: return <TiWeatherSunny className="text-yellow-300 text-2xl" />;
    }
  };

  return (
    <div className="mt-6 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-inner border border-white/20">
      <h3 className="text-lg font-semibold text-white mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-2">
        {dailyData.map((day, index) => (
          <div key={index} className="text-center text-white/90">
            <p className="text-sm">{format(new Date(day.dt * 1000), 'EEE')}</p>
            <div className="my-2">{getWeatherIcon(day.weather[0].main)}</div>
            <p className="text-sm font-semibold">{Math.round(day.main.temp)}°C</p>
            <p className="text-xs capitalize">{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;