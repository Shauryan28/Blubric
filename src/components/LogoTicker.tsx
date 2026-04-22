import './LogoTicker.css';
import { Building2, Landmark, Briefcase, Factory, Hexagon, Component, Boxes } from 'lucide-react';

const logos = [
  { name: 'Acme Corp', icon: <Building2 size={28} /> },
  { name: 'Global Tech', icon: <Hexagon size={28} /> },
  { name: 'Apex Industries', icon: <Factory size={28} /> },
  { name: 'Stark Ventures', icon: <Landmark size={28} /> },
  { name: 'Nexus Dynamics', icon: <Component size={28} /> },
  { name: 'Quantum Group', icon: <Boxes size={28} /> },
  { name: 'Vertex Solutions', icon: <Briefcase size={28} /> },
];

export default function LogoTicker() {
  return (
    <div className="logo-ticker-section">
      <p className="logo-ticker-title">TRUSTED BY 250+ BUSINESSES ACROSS INDIA</p>
      <div className="logo-ticker-container">
        <div className="logo-ticker-track">
          {/* Group 1 */}
          {logos.map((logo, idx) => (
            <div className="logo-item" key={`group1-${idx}`}>
              <div className="logo-icon">{logo.icon}</div>
              <span className="logo-text">{logo.name}</span>
            </div>
          ))}
          {/* Group 2 (Duplicate for seamless loop) */}
          {logos.map((logo, idx) => (
            <div className="logo-item" key={`group2-${idx}`}>
              <div className="logo-icon">{logo.icon}</div>
              <span className="logo-text">{logo.name}</span>
            </div>
          ))}
          {/* Group 3 (Extra safety for wide screens) */}
          {logos.map((logo, idx) => (
            <div className="logo-item" key={`group3-${idx}`}>
              <div className="logo-icon">{logo.icon}</div>
              <span className="logo-text">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
