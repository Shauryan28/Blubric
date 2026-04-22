import { motion } from 'framer-motion';
import GlassSurface from '../components/GlassSurface';
import { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './pages.css';

const CalendlyEmbed = () => {
  useEffect(() => {
    // Only append script if it doesn't already exist to avoid duplicates
    if (!document.getElementById('calendly-script')) {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
      script.setAttribute('async', 'true');
      head?.appendChild(script);
    }
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url="https://calendly.com/i9409285178/30min?hide_gdpr_banner=1" 
      style={{ minWidth: '320px', height: '700px', width: '100%' }} 
    />
  );
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

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
        
        {/* Left Column: Contact Info & Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <GlassSurface backgroundOpacity={0.02} style={{ padding: '2.5rem' }}>
            <h2 className="glass-card-title" style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Direct Contact</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="glass-card-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0, marginBottom: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.1rem', fontSize: '0.9rem' }}>Email Us</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>contact@yourcompany.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="glass-card-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0, marginBottom: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.1rem', fontSize: '0.9rem' }}>Call Us</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>+91 98765 43210</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="glass-card-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0, marginBottom: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.1rem', fontSize: '0.9rem' }}>Location</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Mumbai, India</p>
                </div>
              </div>
            </div>
          </GlassSurface>

          <GlassSurface backgroundOpacity={0.02} style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h2 className="glass-card-title" style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Request a Quotation</h2>
            <p className="glass-card-text" style={{ marginBottom: '2rem', fontSize: '0.9rem' }}>Have a specific query? Drop us a message and our team will get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <input type="text" className="form-input" placeholder="Your Name" required />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <input type="email" className="form-input" placeholder="Work Email" required />
              </div>
              <div className="form-group" style={{ marginBottom: 0, flex: 1 }}>
                <textarea className="form-input" placeholder="How can we help you grow?" style={{ height: '100%', minHeight: '120px', resize: 'none' }} required></textarea>
              </div>
              <button 
                type="submit" 
                className="cta-button primary-cta" 
                disabled={formStatus !== 'idle'}
                style={{ 
                  width: '100%', 
                  marginTop: '1rem', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  opacity: formStatus === 'submitting' ? 0.7 : 1,
                  backgroundColor: formStatus === 'success' ? '#16a34a' : undefined,
                  borderColor: formStatus === 'success' ? '#16a34a' : undefined
                }}
              >
                {formStatus === 'idle' && <><Send size={18} /> Send Message</>}
                {formStatus === 'submitting' && 'Sending...'}
                {formStatus === 'success' && 'Message Sent! ✓'}
              </button>
            </form>
          </GlassSurface>

        </div>

        {/* Right Column: Calendly Widget */}
        <GlassSurface backgroundOpacity={0.1} style={{ padding: '1rem', overflow: 'hidden' }}>
          <CalendlyEmbed />
        </GlassSurface>

      </div>
    </motion.div>
  );
}
