import { motion } from 'framer-motion';
import './bg.css';

export const SilkBackground = () => {
  return (
    <div className="silk-container">
      <div className="silk-layer" />
      <motion.div 
        className="silk-orb orb-1"
        animate={{ 
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
          scale: [1, 1.2, 1, 0.8, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="silk-orb orb-2"
        animate={{ 
          x: [0, -150, 0, 150, 0],
          y: [0, -100, -50, -100, 0],
          scale: [1, 0.9, 1.1, 0.9, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <div className="noise-overlay" />
    </div>
  );
};
