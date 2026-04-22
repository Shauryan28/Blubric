import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
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
      data-url="https://calendly.com/i9409285178/30min?hide_gdpr_banner=1" 
      style={{ minWidth: '320px', height: '650px', width: '100%' }} 
    />
  );
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="contact-page-wrapper"
    >
      <div className="contact-hero">
        <motion.span 
          className="section-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Partner With Us
        </motion.span>
        <motion.h1 
          className="contact-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Let's engineer your next phase of growth.
        </motion.h1>
      </div>

      <div className="contact-grid">
        
        {/* Left Column: Form & Minimal Info */}
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="contact-form-container">
            <h2 className="contact-heading">Request a Quotation</h2>
            <p className="contact-subheading">Tell us about your current bottlenecks and where you want to be. We'll get back to you within 24 hours with actionable next steps.</p>
            
            <form onSubmit={handleSubmit} className="premium-form">
              <div className="input-group">
                <input type="text" id="name" required placeholder=" " />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="input-group">
                <input type="email" id="email" required placeholder=" " />
                <label htmlFor="email">Work Email</label>
              </div>
              <div className="input-group">
                <textarea id="message" required placeholder=" " rows={4}></textarea>
                <label htmlFor="message">How can we help you scale?</label>
              </div>
              <button 
                type="submit" 
                className={`submit-btn ${formStatus}`}
                disabled={formStatus !== 'idle'}
              >
                <span className="btn-text">
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'submitting' && 'Sending...'}
                  {formStatus === 'success' && 'Message Sent'}
                </span>
                {formStatus === 'idle' && <ArrowRight size={18} />}
              </button>
            </form>
          </div>

          <div className="contact-info-footer">
            <div className="info-item">
              <Mail size={16} className="info-icon" />
              <span>contact@blubric.com</span>
            </div>
            <div className="info-item">
              <Phone size={16} className="info-icon" />
              <span>+91 98765 43210</span>
            </div>
            <div className="info-item">
              <MapPin size={16} className="info-icon" />
              <span>Mumbai, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Calendly */}
        <motion.div 
          className="contact-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="calendly-wrapper">
            <div className="calendly-header">
              <h2 className="contact-heading" style={{ marginBottom: '0.5rem' }}>Book a Discovery Call</h2>
              <p className="contact-subheading" style={{ marginBottom: 0 }}>Skip the form. Select a time to speak directly with our founder.</p>
            </div>
            <div className="calendly-frame">
              <CalendlyEmbed />
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
