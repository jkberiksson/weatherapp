import { IoMdAdd } from 'react-icons/io';
import { motion } from 'framer-motion';

const Navbar = ({ setShowModal }) => {
  const handleModal = () => {
    setShowModal(true);
    document.body.style.overflowY = 'hidden';
  };
  return (
    <div className='flex justify-between items-center pt-20 px-5 pb-40'>
      <motion.h1
        className='text-6xl font-medium'
        animate={{ fontSize: '46px' }}
        transition={{ duration: 1 }}
        layoutId='title'>
        today
      </motion.h1>
      <motion.div
        className=' text-3xl cursor-pointer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}>
        <IoMdAdd onClick={handleModal} />
      </motion.div>
    </div>
  );
};

export default Navbar;
