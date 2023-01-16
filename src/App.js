import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingMessage from './components/LoadingMessage';
import Home from './pages/Home';

const API_KEY = 'f331cc3eee3d4774bce181626231601';
const API_URL = 'https://api.weatherapi.com/v1/current.json';

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [cities, setCities] = useState([]);

  const getInitialCities = async (city) => {
    try {
      const response = await fetch(
        `${API_URL}?key=${API_KEY}&q=${city}&aqi=no`
      );
      const data = await response.json();
      setCities((prevState) => {
        if (prevState) {
          return [...prevState, data];
        } else {
          return [data];
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInitialCities('london');
    getInitialCities('new york');
    getInitialCities('oslo');
    getInitialCities('stockholm');
    getInitialCities('paris');
    getInitialCities('edinburgh');
    getInitialCities('madrid');
    getInitialCities('kalmar');
    getInitialCities('mallorca');
  }, []);

  return (
    <div className='bg-gray-100 text-gray-900 min-h-screen max-w-screen-lg mx-auto'>
      <AnimatePresence mode='wait'>
        {showLoading ? (
          <LoadingMessage
            setShowLoading={setShowLoading}
            key='loadingMessage'
          />
        ) : (
          <Home key='home' cities={cities} setCities={setCities} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
