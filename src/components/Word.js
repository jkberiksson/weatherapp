import { motion } from 'framer-motion';

const Word = ({ word, variants, custom }) => {
  return (
    <motion.p
      variants={variants}
      initial='hidden'
      animate='visible'
      exit={custom === 6 ? '' : 'exit'}
      custom={custom}
      layoutId={custom === 6 ? 'title' : ''}>
      {word}
    </motion.p>
  );
};

export default Word;
