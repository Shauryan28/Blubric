import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlassSurface from '../components/GlassSurface';
import './pages.css';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '4rem' }}
    >
      <div className="section-header">
        <span className="section-subtitle">Our Story</span>
        <h1 className="hero-title" style={{ fontSize: '3rem', margin: '0 auto' }}>Building Strategic Clarity</h1>
      </div>

      <div className="grid-2" style={{ marginTop: '4rem' }}>
        <GlassSurface backgroundOpacity={0.1} style={{ padding: '3rem' }}>
          <h2 className="glass-card-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Philosophy & Approach</h2>
          <p className="glass-card-text" style={{ marginBottom: '1.5rem' }}>
            The core philosophy of BLUBRIC is simple: most business owners are incredibly capable and hardworking, but lack strategic clarity. They often struggle with identifying blind spots, interpreting business data, and prioritizing the right actions.
          </p>
          <p className="glass-card-text">
            BLUBRIC is not a traditional consulting firm. It is a lean, modern advisory practice that delivers strategic clarity in a faster, more accessible, and execution-focused manner tailored specifically for Indian businesses.
          </p>
        </GlassSurface>

        <GlassSurface backgroundOpacity={0.05} style={{ padding: '3rem' }}>
          <h2 className="glass-card-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Shaurya Nandecha</h2>
          <span className="section-subtitle">Founder</span>
          <p className="glass-card-text" style={{ marginBottom: '1.5rem' }}>
            With a deep understanding of the intricacies of Indian markets, Shaurya founded BLUBRIC to bridge the gap between high-level consulting and practical, on-the-ground execution for businesses in Vadodara and beyond.
          </p>
          <p className="glass-card-text">
            Our goal is to ensure business owners have the exact roadmap needed to transcend growth plateaus, whether they are early-stage founders seeking direction or established businesses aiming to scale.
          </p>
        </GlassSurface>
      </div>

      <section className="section-container" style={{ textAlign: 'center' }}>
        <GlassSurface backgroundOpacity={0.02} style={{ padding: '4rem 2rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Ideal Partners</h2>
          <p className="hero-subtitle" style={{ margin: '0 auto 3rem' }}>
            We work with Indian business owners facing growth plateaus, early-stage founders seeking direction, and established businesses aiming to scale in Retail, F&B, Consumer Brands, Services, Education, and Manufacturing.
          </p>
          <Link to="/contact" className="cta-button primary-cta" style={{ textDecoration: 'none' }}>See If We're A Fit</Link>
        </GlassSurface>
      </section>
    </motion.div>
  );
}
