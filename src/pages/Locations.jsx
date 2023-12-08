import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Locations = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [closestPlace, setClosestPlace] = useState('');
  const fiveGuys = 'five guys ';

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
              setZipCode(data.address.postcode);
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
    getUserLocation();
  }, []);

  const findClosestPlace = async () => {
    console.log(fiveGuys);
    console.log('query', query);
    console.log(zipCode);
    if (userLocation && result && result.length > 0) {
      const closestApiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${fiveGuys}${query}&lat=${userLocation.latitude}&lon=${userLocation.longitude}&limit=1`;

      try {
        const response = await fetch(closestApiUrl);
        const data = await response.json();
        console.log(data);
        if (data && data.length > 0) {
          setClosestPlace(data[0]);
        }
      } catch (error) {
        console.error('Error fetching closest place:', error);
      }
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []); // Fetch user location on component mount

  useEffect(() => {
    if (query.trim() !== '') {
      handleSearch();
    }
  }, [query]);

  useEffect(() => {
    findClosestPlace();
  }, [userLocation, result]);

  console.log('jfkfk', closestPlace);

  return (
    <div>
      <Header />
      <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
        <div>
          <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Enter location' />
        </div>

        <div>
          {result && (
            <div>
              <h2>Search Results</h2>
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
              <h2>Closest Place</h2>
              <p>
                {closestPlace.display_name} - ({closestPlace.lat}, {closestPlace.lon})
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Locations;
