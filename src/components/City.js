import { motion } from 'framer-motion';

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.25,
    },
  },
};

const City = ({ city }) => {
  return (
    <motion.div
      layout
      variants={variants}
      className='flex justify-between items-center border-b border-gray-300 px-5 py-7 hover:bg-gray-200'>
      <div className='flex flex-col justify-center'>
        <div className='text-xs font-medium text-gray-500'>
          {city.location.country}
        </div>
        <div className='text-2xl font-medium'>{city.location.name}</div>
      </div>
      <div className='flex flex-col items-end'>
        <div className='text-xs text-gray-500'>
          {city.location.localtime.split(' ')[1]}
        </div>
        <div className='flex items-center gap-2'>
          <div className='text-2xl'>
            {Math.round(city.current.temp_c)}&#176;
          </div>
          <img className='h-10 w-10' src={city.current.condition.icon} alt='' />
        </div>
      </div>
    </motion.div>
  );
};

export default City;
