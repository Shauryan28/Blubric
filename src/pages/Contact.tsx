import { motion } from 'framer-motion';
import GlassSurface from '../components/GlassSurface';
import { useEffect, useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import './pages.css';

const CalendlyEmbed = () => {
  useEffect(() => {
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
      data-url="https://calendly.com/i9409285178/30min" 
      style={{ minWidth: '320px', height: '700px', width: '100%' }} 
    />
  );
};

const QueryForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 0', textAlign: 'center' }}
      >
        <CheckCircle2 size={64} color="#16a34a" style={{ marginBottom: '1rem' }} />
        <h3 className="glass-card-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Query Sent!</h3>
        <p className="glass-card-text">We've received your details and will reach out with a quotation shortly.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1rem' }}>
      <div className="form-group" style={{ marginBottom: 0 }}>
        <input required type="text" className="form-input" placeholder="Full Name" style={{ background: 'rgba(255,255,255,0.8)' }} />
      </div>
      <div className="form-group" style={{ marginBottom: 0 }}>
        <input required type="email" className="form-input" placeholder="Work Email" style={{ background: 'rgba(255,255,255,0.8)' }} />
      </div>
      <div className="form-group" style={{ marginBottom: 0 }}>
        <input required type="text" className="form-input" placeholder="Company Name" style={{ background: 'rgba(255,255,255,0.8)' }} />
      </div>
      <div className="form-group" style={{ marginBottom: 0 }}>
        <textarea required className="form-input" placeholder="Tell us about your growth challenges or request a quotation..." style={{ background: 'rgba(255,255,255,0.8)', minHeight: '100px' }}></textarea>
      </div>
      <button 
        type="submit" 
        className="cta-button primary-cta" 
        disabled={status === 'submitting'}
        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
      >
        {status === 'submitting' ? 'Sending...' : (
          <>
            Request Quotation <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
};

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
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            <h2 className="glass-card-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Direct Contact</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="glass-card-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0, marginBottom: 0 }}>
                <Mail size={20} />
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>hello@blubric.com</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="glass-card-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0, marginBottom: 0 }}>
                <Phone size={20} />
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>+91 00000 00000</p>
            </div>
          </div>
          
          <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <h2 className="glass-card-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Send a Query</h2>
            <p className="glass-card-text" style={{ marginBottom: '1rem' }}>
              Looking for a custom quotation or have specific growth questions? Drop us a message.
            </p>
            <QueryForm />
          </div>
        </GlassSurface>

        <GlassSurface backgroundOpacity={0.1} style={{ padding: '1rem', overflow: 'hidden' }}>
          <CalendlyEmbed />
        </GlassSurface>
      </div>
    </motion.div>
  );
}
