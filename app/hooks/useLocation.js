import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function useLocation() {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) return;

      const {
        coords: { latitude, longitude},
      } = await Location.getLastKnownPositionAsync();

      setLocation({ latitude, longitude });
    } catch (e) {
      console.log('Error location', e)
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return location;
}
