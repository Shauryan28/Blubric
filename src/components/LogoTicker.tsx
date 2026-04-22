import { motion } from 'framer-motion';
import './LogoTicker.css';

const logos = [
  "Acme Corp", "Nexus Industries", "Vertex Solutions", "Apex Global", 
  "Pinnacle Group", "Horizon Ventures", "Zeith Partners", "Omni Systems",
  "Acme Corp", "Nexus Industries", "Vertex Solutions", "Apex Global", 
  "Pinnacle Group", "Horizon Ventures", "Zeith Partners", "Omni Systems"
];

export default function LogoTicker() {
  return (
    <div className="logo-ticker-section">
      <p className="logo-ticker-title">TRUSTED BY LEADING INDIAN ENTERPRISES</p>
      <div className="logo-ticker-container">
        <motion.div 
          className="logo-ticker-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
