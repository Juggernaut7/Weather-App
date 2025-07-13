import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const useGeolocation = () => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        toast.info('Location fetched successfully');
      },
      (err) => {
        setError('Failed to get location');
        console.error('Geolocation error:', err);
        toast.error('Failed to get location');
      }
    );
  }, []);

  return { coords, error };
};

export default useGeolocation;