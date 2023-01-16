import City from './City';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import AddModal from './AddModal';

const variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};

const Cities = ({ cities, showModal, setShowModal, setCities }) => {
  return (
    <>
      <AnimatePresence>
        {showModal && (
          <AddModal
            key='addModal'
            setShowModal={setShowModal}
            cities={cities}
            setCities={setCities}
          />
        )}
      </AnimatePresence>
      <motion.div variants={variants} initial='hidden' animate='visible'>
        {cities.map((city, idx) => (
          <City city={city} idx={idx} key={city.location.name} />
        ))}
      </motion.div>
    </>
  );
};

export default Cities;
