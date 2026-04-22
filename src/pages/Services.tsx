import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlassSurface from '../components/GlassSurface';
import { Search, Map, BarChart, Users, BookOpen, FileText } from 'lucide-react';
import './pages.css';

const services = [
  {
    icon: <Search />,
    title: "Business Audits & Diagnostics",
    description: "In-depth evaluations of your core operations to catch inefficiencies and unlock hidden revenue vectors."
  },
  {
    icon: <Map />,
    title: "Growth Strategy Planning",
    description: "Designing structured step-by-step master plans to effectively scale your output and profitability."
  },
  {
    icon: <BarChart />,
    title: "Market Research",
    description: "Detailed intelligence regarding your target demographic and emerging sector trends."
  },
  {
    icon: <Target />,
    title: "Competitor Analysis",
    description: "Understanding competitor weak points and strengths to effectively position your brand at the top."
  },
  {
    icon: <Users />,
    title: "Ongoing Advisory Support",
    description: "A continuous feedback loop and advisory pipeline to help you execute the strategic roadmap flawlessly."
  },
  {
    icon: <BookOpen />,
    title: "Group AI Workshops",
    description: "Hands-on sessions tailored to implement next-gen AI tools for unprecedented business efficiency."
  },
  {
    icon: <FileText />,
    title: "Self-Assessment Reports",
    description: "Customized toolkits allowing you to continuously track and assess operational metrics."
  }
];

import { Target } from 'lucide-react';

export default function Services() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '4rem' }}
    >
      <div className="section-header">
        <span className="section-subtitle">Our Offerings</span>
        <h1 className="hero-title" style={{ fontSize: '3rem', margin: '0 auto' }}>Execution Focused Solutions</h1>
      </div>

      <div className="grid-3" style={{ marginTop: '4rem' }}>
        {services.map((service, i) => (
          <GlassSurface key={i} backgroundOpacity={0.05}>
            <div className="glass-card">
              <div className="glass-card-icon">{service.icon}</div>
              <h3 className="glass-card-title">{service.title}</h3>
              <p className="glass-card-text">{service.description}</p>
            </div>
          </GlassSurface>
        ))}
      </div>

      <section className="section-container" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2 className="section-title" style={{ marginBottom: '2rem' }}>Ready to unlock your potential?</h2>
        <Link to="/contact" className="cta-button primary-cta" style={{ textDecoration: 'none' }}>Start Your Audit Today</Link>
      </section>
    </motion.div>
  );
}
