import { useState } from 'react';
import Cities from '../components/Cities';
import Navbar from '../components/Navbar';

const Home = ({ cities, setCities }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <Cities
        cities={cities}
        setCities={setCities}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </>
  );
};

export default Home;
