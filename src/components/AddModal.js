import { motion } from 'framer-motion';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

const API_KEY = '4904fc472b1b4320884142407230201';
const API_URL = 'http://api.weatherapi.com/v1/current.json';

const AddModal = ({ cities, setCities, setShowModal }) => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [cityDetail, setCityDetail] = useState(null);

  const getData = async (city) => {
    try {
      const response = await fetch(
        `${API_URL}?key=${API_KEY}&q=${city}&aqi=no`
      );
      const data = await response.json();
      setCityDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = (e) => {
    if (e.target.id === 'background') {
      setShowModal(false);
      document.body.style.overflowY = 'auto';
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    getData(search);
    setSearch('');
    setError(false);
  };

  const handleAdd = () => {
    const newArr = cities.map((city) => city?.location?.name);
    const includes = newArr.includes(cityDetail?.location?.name);
    if (!includes) {
      setShowModal(false);
      document.body.style.overflowY = 'auto';
      setTimeout(() => {
        setCities((prevState) => [cityDetail, ...prevState]);
      }, 300);
    } else {
      setError(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.2, duration: 0.2 } }}
      transition={{ duration: 0.2 }}
      id='background'
      onClick={handleModal}
      className=' min-h-screen w-screen top-0 left-0 bg-black/90 fixed pt-10 px-5 z-50'>
      <motion.form
        onSubmit={handleSearch}
        initial={{ y: '-20vh', scale: 0.8 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: '-20vh', scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className=' bg-gray-100 rounded-lg p-4 flex gap-2 max-w-sm mx-auto'>
        <div className='h-12 bg-gray-300 rounded-lg relative'>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search'
            type='text'
            className='h-full w-full bg-inherit rounded-lg px-10 text-black placeholder-gray-600 outline-none'
          />
          <BsSearch
            className=' absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none'
            size={20}
          />
        </div>
        <button
          type='submit'
          className=' font-medium bg-blue-400 rounded-lg px-5 hover:bg-blue-500 transition ease-in-out'>
          Search
        </button>
      </motion.form>
      {cityDetail && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='bg-gray-100 rounded-lg p-4 mt-5 max-w-sm mx-auto flex flex-col items-center gap-5'>
          <div className=' text-2xl font-medium'>
            {cityDetail?.location?.name}
          </div>
          <div className='flex items-center gap-3'>
            <div className='text-2xl'>
              {Math.round(cityDetail?.current?.temp_c)}&#176;
            </div>
            <img
              className='h-10 w-10'
              src={cityDetail?.current?.condition?.icon}
              alt=''
            />
          </div>
          <button
            onClick={handleAdd}
            className=' font-medium bg-green-400 rounded-lg w-full py-4 hover:bg-green-500 transition ease-in-out'>
            Add to list
          </button>
          {error && (
            <div className=' text-sm font-medium text-center text-red-500'>
              Whops, looks like {cityDetail?.location?.name} is already in the
              list... Try Again!
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default AddModal;
