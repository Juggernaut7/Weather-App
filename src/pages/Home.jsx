
import { toast, ToastContainer } from "react-toastify";
import useWeather from "../hooks/useWeather";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastList from "../components/ForcastList";

export default function Home() {
  const { data, error, search } = useWeather();

  if (error) {
    toast.error(error);
  }

  return (
    <div className="space-y-6 py-6 px-4 flex flex-col items-center">
      <SearchBar onSearch={search} />
      {data && <WeatherCard data={data} />}
      <ForecastList />
      <ToastContainer position="top-center" />
    </div>
  );
}
