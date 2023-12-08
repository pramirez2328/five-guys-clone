import { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/locations.css';

const Locations = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [closestPlace, setClosestPlace] = useState('');
  const [closestPlaceCoordinates, setClosestPlaceCoordinates] = useState(null);
  const fiveGuys = 'five guys ';

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [query]);

  useEffect(() => {
    findClosestPlace();
  }, [userLocation, result]);

  useEffect(() => {
    // Check if the map container exists
    const mapContainer = document.getElementById('map');

    // Only initialize the map if it doesn't already exist
    if (mapContainer && !mapContainer._leaflet_id && closestPlaceCoordinates) {
      const map = L.map('map').setView(closestPlaceCoordinates, 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // Add a marker for the closest place when the coordinates are available
      if (closestPlaceCoordinates) {
        L.marker(closestPlaceCoordinates).addTo(map);
      }

      return () => {
        if (map) {
          map.remove();
        }
      };
    }
  }, [closestPlaceCoordinates]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${fiveGuys}${query}&limit=5`
      );
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();

            if (data && data.address) {
              setQuery(data.address.postcode);
            }
          } catch (error) {
            console.error('Error fetching user address:', error);
          }
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const findClosestPlace = async () => {
    if (userLocation && result && result.length > 0) {
      const closestApiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${fiveGuys}${query}&lat=${userLocation.latitude}&lon=${userLocation.longitude}&limit=1`;

      try {
        const response = await fetch(closestApiUrl);
        const data = await response.json();
        if (data && data.length > 0) {
          setClosestPlace(data[0]);
          setClosestPlaceCoordinates([data[0].lat, data[0].lon]); // Set the coordinates
        }
      } catch (error) {
        console.error('Error fetching closest place:', error);
      }
    }
  };

  return (
    <div>
      <Header />
      <div id='location-container' className='col-md-8 mx-auto'>
        <div id='location-input'>
          <h3 id='search-title'>Find the closest place</h3>
          <label className='text-muted'>Enter zip code</label>
          <br />
          <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='zip code' />
        </div>

        <div>
          {result && (
            <div>
              <h3 className='text-muted'>Search Results</h3>
              <ul>
                {result.map((location) => (
                  <li key={location.place_id}>
                    {location.display_name} - ({location.lat}, {location.lon})
                  </li>
                ))}
              </ul>
            </div>
          )}

          {closestPlace && (
            <div>
              <h3 className='text-muted'>Closest Place</h3>
              <p>
                {closestPlace.display_name} - ({closestPlace.lat}, {closestPlace.lon})
              </p>
            </div>
          )}
        </div>
      </div>
      <div id='map'></div>
      <Footer />
    </div>
  );
};

export default Locations;
