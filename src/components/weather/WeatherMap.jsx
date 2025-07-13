import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { API_KEY } from '../../utils/constants';

// Fix for Leaflet marker icon in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const WeatherMap = ({ lat, lon }) => {
  const tempLayerUrl = `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`;

  return (
    <div className="mt-4 h-64 rounded-2xl overflow-hidden border border-gray-200/20 shadow-inner">
      <MapContainer
        center={[lat, lon]}
        zoom={10}
        style={{ height: '100%', width: '100%' }}
        className="rounded-2xl"
        aria-label="Interactive weather map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <TileLayer url={tempLayerUrl} opacity={0.7} />
        <Marker position={[lat, lon]} />
      </MapContainer>
    </div>
  );
};

export default WeatherMap;