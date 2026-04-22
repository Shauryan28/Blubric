import { motion } from 'framer-motion';
import GlassSurface from '../components/GlassSurface';
import { Mail, MapPin, Phone } from 'lucide-react';
import { InlineWidget } from 'react-calendly';
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
        <GlassSurface backgroundOpacity={0.02} style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="glass-card-title" style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Direct Contact</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="glass-card-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0, marginBottom: 0 }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Email Us</p>
                <p style={{ color: 'var(--text-secondary)' }}>hello@blubric.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="glass-card-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0, marginBottom: 0 }}>
                <Phone size={24} />
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Call Us</p>
                <p style={{ color: 'var(--text-secondary)' }}>+91 94092 85178</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="glass-card-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0, marginBottom: 0 }}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Location</p>
                <p style={{ color: 'var(--text-secondary)' }}>India</p>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <h3 className="glass-card-title" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Book a Consultation</h3>
            <p className="glass-card-text">
              Select a time that works best for you on the calendar to schedule a 30-minute discovery call with our founder.
            </p>
          </div>
        </GlassSurface>

        <GlassSurface backgroundOpacity={0.1} style={{ padding: '1rem', overflow: 'hidden' }}>
          <InlineWidget url="https://calendly.com/i9409285178/30min" styles={{ height: '700px' }} />
        </GlassSurface>
      </div>
    </motion.div>
  );
}
