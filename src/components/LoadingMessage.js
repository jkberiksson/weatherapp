import { useEffect } from 'react';
import Word from './Word';

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: (i) => ({
    opacity: i === 6 || i === 7 ? 1 : 0.3,
    transition: {
      duration: 0.7,
      delay: i * 0.3,
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const LoadingMessage = ({ setShowLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 4000);
  }, [setShowLoading]);

  return (
    <div className='h-screen w-screen absolute left-0 flex flex-col justify-center items-center gap-3 font-normal text-3xl'>
      <div className='flex gap-1'>
        <Word word='What' variants={variants} custom={1} />
        <Word word='is' variants={variants} custom={2} />
      </div>
      <div className='flex gap-1'>
        <Word word='the' variants={variants} custom={3} />
        <Word word='weather' variants={variants} custom={4} />
        <Word word='like' variants={variants} custom={5} />
      </div>
      <div className='flex text-6xl font-medium'>
        <Word word='today' variants={variants} custom={6} />
        <Word word='?' variants={variants} custom={7} />
      </div>
    </div>
  );
};

export default LoadingMessage;
