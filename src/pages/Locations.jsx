import { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import '../styles/locations.css';

const Locations = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [closestPlace, setClosestPlace] = useState('');
  const [closestPlaceCoordinates, setClosestPlaceCoordinates] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fiveGuys = 'five guys ';

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
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
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    handleSearch();
  }, [query]);

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

  useEffect(() => {
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

    findClosestPlace();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLocation, result]);

  useEffect(() => {
    // Check if the map container exists
    const mapContainer = document.getElementById('map');

    // Only initialize the map if it doesn't already exist
    if (mapContainer && !mapContainer._leaflet_id && closestPlaceCoordinates) {
      const map = L.map('map').setView(closestPlaceCoordinates, 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 14,
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

  return (
    <div>
      <Header />
      <div id='location-container' className='col-md-8 mx-auto px-5'>
        <div id='location-input'>
          <h3 id='search-title'>Find the closest place</h3>
          <label className='text-muted'>Enter zip code</label>
          <br />
          <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='zip code' />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {result && (
              <div>
                <h5 className='result-titles'>Search results:</h5>
                <h6 className='text-muted'>{result.length} restaurants close to you!</h6>
                <ul>
                  {result.map((location) => (
                    <li key={location.place_id}>{location.display_name.replace('Five Guys, ', '')}</li>
                  ))}
                </ul>
              </div>
            )}

            {closestPlace && (
              <div className='mb-4'>
                <h5 className='result-titles'>Closest place:</h5>
                <p className='mb-1'>Four Guys</p>
                <p className='mb-0'> - {closestPlace.display_name.replace('Five Guys, ', '')}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${closestPlace.display_name}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  Open in Google Maps
                </a>
              </div>
            )}
          </div>
        )}
      </div>
      <div id='map'></div>
      <Footer />
    </div>
  );
};

export default Locations;
