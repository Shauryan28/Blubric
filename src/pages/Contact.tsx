import { motion } from 'framer-motion';
import GlassSurface from '../components/GlassSurface';
import { Calendar } from 'lucide-react';
import './pages.css';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      <div className="section-header">
        <span className="section-subtitle">Get In Touch</span>
        <h1 className="hero-title" style={{ fontSize: '3rem', margin: '0 auto' }}>Start Your Journey</h1>
      </div>

      <div className="grid-2" style={{ marginTop: '4rem', alignItems: 'stretch' }}>
        <GlassSurface backgroundOpacity={0.1} style={{ padding: '3rem' }}>
          <h2 className="glass-card-title" style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Drop us a message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="you@company.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Company / Business Name</label>
              <input type="text" className="form-input" placeholder="Company Name" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" placeholder="How can we help you grow?"></textarea>
            </div>
            <button className="cta-button primary-cta" style={{ width: '100%', marginTop: '1rem' }}>
              Send Message
            </button>
          </form>
        </GlassSurface>

        <GlassSurface backgroundOpacity={0.02} style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div className="glass-card-icon" style={{ width: '64px', height: '64px', borderRadius: '50%', marginBottom: '2rem' }}>
            <Calendar size={32} />
          </div>
          <h2 className="glass-card-title" style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>Book a Consultation</h2>
          <p className="glass-card-text" style={{ marginBottom: '2rem' }}>
            Skip the form and go straight to scheduling. Book a 30-minute discovery call with our founder.
          </p>
          <button className="secondary-cta" style={{ width: '100%' }}>
            Open Calendly
          </button>
        </GlassSurface>
      </div>
    </motion.div>
  );
}
