import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Mail, MapPin, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import './pages.css';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Web3Forms Access Key — Get yours at https://web3forms.com
// Enter your email → receive access key → paste below
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

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
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMsg('');

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New Quotation Request — BLUBRIC');
    formData.append('from_name', 'BLUBRIC Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 4000);
      } else {
        setFormStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
        setTimeout(() => setFormStatus('idle'), 4000);
      }
    } catch {
      setFormStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
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
            
            <form ref={formRef} onSubmit={handleSubmit} className="premium-form">
              {/* Hidden field for Web3Forms recipient */}
              <input type="hidden" name="to_email" value="i9409285178@gmail.com" />
              
              <div className="input-group">
                <input type="text" id="name" name="name" required placeholder=" " />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="input-group">
                <input type="email" id="email" name="email" required placeholder=" " />
                <label htmlFor="email">Work Email</label>
              </div>
              <div className="input-group">
                <textarea id="message" name="message" required placeholder=" " rows={4}></textarea>
                <label htmlFor="message">How can we help you scale?</label>
              </div>

              {/* Success Message */}
              {formStatus === 'success' && (
                <div className="form-feedback success">
                  <CheckCircle size={18} />
                  <span>Message sent successfully! We'll be in touch within 24 hours.</span>
                </div>
              )}

              {/* Error Message */}
              {formStatus === 'error' && (
                <div className="form-feedback error">
                  <AlertCircle size={18} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button 
                type="submit" 
                className={`submit-btn ${formStatus}`}
                disabled={formStatus !== 'idle'}
              >
                <span className="btn-text">
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'submitting' && 'Sending...'}
                  {formStatus === 'success' && 'Message Sent ✓'}
                  {formStatus === 'error' && 'Try Again'}
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
